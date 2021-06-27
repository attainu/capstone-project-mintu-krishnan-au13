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
        <Link to={`/category/${c.slug}`} className='badge badge-default p-3'>
          {c.name}
        </Link>
      </div>
    ));
  };

  return (
    <div className='container-fluid '>
      <h2 className=' font-weight-bold dark-grey-text text-center my-5'>
        Categories
      </h2>
      <div className='row mx-5'>
        <div class='col-md-4 mb-4'>
          <div className=''>
            <div class='view'>
              <img
                src='https://mdbootstrap.com/img/illustrations/drawkit-drawing-man-colour.svg'
                class='img-fluid w-100'
                alt='sample image'
              />
            </div>
          </div>
        </div>
        <div className=' col-md-8 d-flex align-items-center flex-column mb-4 justify-content-center '>
          <div className='row '>
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
