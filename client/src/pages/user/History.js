import React from 'react';
import UserNav from '../../components/nav/UserNav';

const History = () => {
  return (
    <div className='row'>
      <UserNav page={1} />

      <div className='col d-flex'>user history page</div>
    </div>
  );
};

export default History;
