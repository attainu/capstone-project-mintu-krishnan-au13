import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  createCategory,
  getCategories,
  removeCategory,
} from '../../../functions/category';
import { Link } from 'react-router-dom';

import CategoryForm from '../../../components/forms/CategoryForm';
import LocalSearch from '../../../components/forms/LocalSearch';
import Admin from '../../../components/UI/Admin';
import AdminDash from '../../../components/UI/AdminDash';
import Card from '../../../components/UI/Card';

const CategoryCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  //step 1 - searching/filtering
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory({ name }, user.token)
      .then((res) => {
        setLoading(false);
        setName('');
        toast.success(`"${res.data.name}" is created`);
        loadCategories();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    if (window.confirm('Delete?')) {
      setLoading(true);
      removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadCategories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  //step 4
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <Admin page={4}>
      <AdminDash>
        <Card>
          {loading ? (
            <h4 className='text-danger'>Loading..</h4>
          ) : (
            <h4 className='text-center blue-text mt-4'>CREATE CATEGORY</h4>
          )}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </Card>

        {/* step 2 & step 3 */}
        <LocalSearch keyword={keyword} setKeyword={setKeyword} />

        <div className='row'>
          {categories.filter(searched(keyword)).map((c) => (
            <div className='col-md-4 my-3 ' key={c._id}>
              <div className='card card-cascade z-depth-3 dark-bg-color h-100'>
                <div className='view view-cascade gradient-card-header h-100 d-flex flex-column justify-content-center'>
                  <h4 className='card-header-title text-uppercase grey-text'>
                    {c.name}
                  </h4>

                  <div>
                    <Link
                      to={`/admin/category/${c.slug}`}
                      type='button '
                      className='btn-floating'
                    >
                      <i className=' btn-info far fa-edit'></i>
                    </Link>
                    <a type='button ' className='btn-floating'>
                      <i
                        className='btn-danger far fa-trash-alt'
                        onClick={() => handleRemove(c.slug)}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminDash>
    </Admin>
  );
};

export default CategoryCreate;
