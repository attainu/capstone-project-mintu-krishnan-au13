import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { getOrders, changeStatus } from '../../functions/admin';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Orders from '../../components/order/Orders';
import Admin from '../../components/UI/Admin';
import WiderAdminDash from '../../components/UI/WiderAdminDash';
import Card from '../../components/UI/Card';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success('Status updated');
      loadOrders();
    });
  };

  return (
    <Admin page={1}>
      <WiderAdminDash>
        <Card>
          <h4 className='text-center blue-text my-4'>ADMIN DASHBOARD</h4>
        </Card>
        <Orders orders={orders} handleStatusChange={handleStatusChange} />
      </WiderAdminDash>
    </Admin>
  );
};

export default AdminDashboard;
