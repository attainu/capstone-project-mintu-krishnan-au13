import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getCategory, updateCategory } from '../../../functions/category';
import CategoryForm from '../../../components/forms/CategoryForm';
import AdminDash from '../../../components/UI/AdminDash';
import Admin from '../../../components/UI/Admin';
import Card from '../../../components/UI/Card';

const CategoryUpdate = ({ history, match }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () =>
    getCategory(match.params.slug).then((c) => {
      setName(c.data.category.name);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateCategory(match.params.slug, { name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName('');
        toast.success(`"${res.data.name}" is updated`);
        history.push('/admin/category');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <Admin page={4}>
      <AdminDash>
        <Card>
          {loading ? (
            <h4 className='text-danger'>Loading..</h4>
          ) : (
            <h4 className='text-center blue-text mt-4'>UPDATE CATEGORY</h4>
          )}

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

export default CategoryUpdate;
