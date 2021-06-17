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
        <Link to={`/sub/${s.slug}`} className='badge badge-secondary p-2'>
          {s.name}
        </Link>
      </div>
    ));

  return (
    <div className='container-fluid row my-5'>
      <div className='col col-md-2'>
        <h3>Sub Categories</h3>
      </div>
      <div className='col'>
        <div className='card mx-3 px-3'>
          <div className='row'>
            {loading ? <h4 className='text-center'>Loading...</h4> : showSubs()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubList;
