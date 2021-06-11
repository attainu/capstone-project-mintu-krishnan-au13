import React from 'react';
import AdminNav from '../nav/AdminNav';

const Admin = ({ children, page }) => {
  return (
    <div className='container-fluid light-dark-bg-color'>
      <div className='row'>
        <AdminNav page={page} />
        {children}
      </div>
    </div>
  );
};

export default Admin;
