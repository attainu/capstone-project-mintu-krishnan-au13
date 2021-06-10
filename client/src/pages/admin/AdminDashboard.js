import React from 'react';
import AdminNav from '../../components/nav/AdminNav';

const AdminDashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <AdminNav page={1} />

        <div className='col'>Admin nav page</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
