import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../functions/category';
import { updateSub, getSub } from '../../../functions/sub';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CategoryForm from '../../../components/forms/CategoryForm';
import LocalSearch from '../../../components/forms/LocalSearch';
import Admin from '../../../components/UI/Admin';
import AdminDash from '../../../components/UI/AdminDash';
import Card from '../../../components/UI/Card';

const SubUpdate = ({ match, history }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [parent, setParent] = useState('');

  useEffect(() => {
    loadCategories();
    loadSub();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const loadSub = () =>
    getSub(match.params.slug).then((s) => {
      setName(s.data.name);
      setParent(s.data.parent);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateSub(match.params.slug, { name, parent }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName('');
        toast.success(`"${res.data.name}" is updated`);
        history.push('/admin/sub');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <Admin page={5}>
      <AdminDash>
        <Card>
          {loading ? (
            <h4 className='text-danger'>Loading..</h4>
          ) : (
            <h4 className='text-center blue-text mt-4'>UPDATE SUB CATEGORY</h4>
          )}
          <div className='input-group px-4 mt-4'>
            <div className='input-group-prepend no-border'>
              <label
                className='input-group-text black-color blue-bg-color '
                htmlFor='inputGroupSelect01'
              >
                PARENT CATEGORY
              </label>
            </div>
            <select
              className='browser-default dark-bg-color white-color custom-select'
              id='inputGroupSelect01'
              onChange={(e) => setParent(e.target.value)}
            >
              <option selected>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* <div className='form-group'>
            <label>Parent category</label>
            <select
              name='category'
              className='form-control'
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div> */}

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </Card>
      </AdminDash>
    </Admin>
  );
};

export default SubUpdate;
