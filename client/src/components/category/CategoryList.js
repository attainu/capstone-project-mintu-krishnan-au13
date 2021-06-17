import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../functions/category';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const showCategories = () => {
    return categories.map((c) => (
      <div key={c._id} className='mx-3 my-2'>
        <Link to={`/category/${c.slug}`} className='badge badge-default p-2'>
          {c.name}
        </Link>
      </div>
    ));
  };

  return (
    <div className='container-fluid row mt-5'>
      <div className='col col-md-2'>
        <h3>Categories</h3>
      </div>
      <div className='col'>
        <div className='card mx-3 px-3'>
          <div className='row'>
            {loading ? (
              <h4 className='text-center'>Loading...</h4>
            ) : (
              showCategories()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
