import React from 'react';
import Admin from '../../components/UI/Admin';
import AdminDash from '../../components/UI/AdminDash';

const AdminDashboard = () => {
  return (
    <Admin page={1}>
      <AdminDash></AdminDash>
    </Admin>
  );
};

export default AdminDashboard;
