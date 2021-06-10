import React from 'react';
import AdminNav from '../../components/nav/AdminNav';

const AdminDashboard = () => {
  return (
    <div className='row'>
      <AdminNav page={1} />

      <div className='col d-flex'>Admin nav page</div>
    </div>
  );
};

export default AdminDashboard;
