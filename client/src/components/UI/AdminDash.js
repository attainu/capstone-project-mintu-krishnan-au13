import React from 'react';

const AdminDash = ({ children }) => {
  return (
    <div className='marginleft container-fluid my-5'>
      <div className='col mt-5 col-sm-12 col-md-10 offset-md-1 '>
        {children}
      </div>
    </div>
  );
};

export default AdminDash;
