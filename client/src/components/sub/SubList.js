import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSubs } from '../../functions/sub';

const SubList = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSubs().then((res) => {
      setSubs(res.data);
      setLoading(false);
    });
  }, []);

  const showSubs = () =>
    subs.map((s) => (
      <div key={s._id} className=' mx-3 my-2'>
        <Link to={`/sub/${s.slug}`} className='badge badge-default p-2'>
          {s.name}
        </Link>
      </div>
    ));

  return (
    <div className='container-fluid mb-5'>
      <h2 className=' font-weight-bold dark-grey-text text-center my-5'>
        Sub Categories
      </h2>
      <div className='row mx-5'>
        <div className=' col-md-8 d-flex align-items-center flex-column mb-4 justify-content-center '>
          <div className='row justify-content-end'>
            {loading ? <h4 className='text-center'>Loading...</h4> : showSubs()}
          </div>
        </div>
        <div class='col-md-4 mb-4 '>
          <div className=''>
            <div class='view '>
              <img
                src='https://mdbootstrap.com/img/illustrations/app-user-colour.svg'
                class='  '
                alt='sample image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubList;
