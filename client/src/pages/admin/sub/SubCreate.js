import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../functions/category';
import {
  createSub,
  getSub,
  getSpecificSub,
  removeSub,
  getSubs,
} from '../../../functions/sub';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CategoryForm from '../../../components/forms/CategoryForm';
import LocalSearch from '../../../components/forms/LocalSearch';
import Admin from '../../../components/UI/Admin';
import AdminDash from '../../../components/UI/AdminDash';
import Card from '../../../components/UI/Card';

const SubCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [subs, setSubs] = useState([]);

  // step 1
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const loadSubs = () =>
    getSpecificSub({ parent: category }).then((s) => setSubs(s.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createSub({ name, parent: category }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName('');
        toast.success(`"${res.data.name}" is created`);
        loadSubs();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const onChangeHandler = (e) => {
    setCategory(e.target.value);
    if (e.target.value != 'Please select') {
      getSpecificSub({ parent: e.target.value }).then((s) => setSubs(s.data));
    } else {
      setSubs('');
    }
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm('Delete?')) {
      setLoading(true);
      removeSub(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadSubs();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  // step 4
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    // <div className='container-fluid'>
    //   <div className='row'>
    //     <AdminNav page={5} />

    //     <div className='col mt-5 col-md-6 offset-md-2'>
    <Admin page={5}>
      <AdminDash>
        <Card>
          {loading ? (
            <h4 className='text-danger'>Loading..</h4>
          ) : (
            <h4 className='text-center blue-text mt-4'>CREATE SUB CATEGORY</h4>
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
              onChange={onChangeHandler}
            >
              <option selected>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* <select
              name='category'
              className='mdb-select md-form'
              onChange={onChangeHandler}
            >
              <option selected>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select> */}

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </Card>
        {/* step 2 and step 3 */}

        {subs && subs.length > 0 && (
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />
        )}
        <div className='row'>
          {subs &&
            subs.length > 0 &&
            subs.filter(searched(keyword)).map((s) => (
              <div className='col-md-4 my-3 ' key={s._id}>
                <div className='card card-cascade z-depth-3 dark-bg-color'>
                  <div className='view view-cascade gradient-card-header'>
                    <h4 className='card-header-title text-uppercase grey-text'>
                      {s.name}
                    </h4>
                    <Link
                      to={`/admin/sub/${s.slug}`}
                      type='button '
                      className='btn-floating'
                    >
                      <i className=' btn-info far fa-edit'></i>
                    </Link>
                    <a type='button ' className='btn-floating'>
                      <i
                        className='btn-danger far fa-trash-alt'
                        onClick={() => handleRemove(s.slug)}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              // <div className='alert alert-secondary' key={s._id}>
              //   {s.name}
              //   <span
              //     onClick={() => handleRemove(s.slug)}
              //     className='btn btn-sm float-right'
              //   >
              //     <DeleteOutlined className='text-danger' />
              //   </span>
              //   <Link to={`/admin/sub/${s.slug}`}>
              //     <span className='btn btn-sm float-right'>
              //       <EditOutlined className='text-warning' />
              //     </span>
              //   </Link>
              // </div>
            ))}
        </div>
      </AdminDash>
    </Admin>
    /* </div>
      </div>
    </div> */
  );
};

export default SubCreate;
