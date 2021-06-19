import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import {
  getCoupons,
  removeCoupon,
  createCoupon,
} from '../../../functions/coupon';
import 'react-datepicker/dist/react-datepicker.css';
import { DeleteOutlined } from '@ant-design/icons';

import Admin from '../../../components/UI/Admin';
import Card from '../../../components/UI/Card';
import AdminDash from '../../../components/UI/AdminDash';

const CreateCouponPage = () => {
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [discount, setDiscount] = useState('');
  const [loading, setLoading] = useState('');
  const [coupons, setCoupons] = useState([]);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllCoupons();
  }, []);

  const loadAllCoupons = () => getCoupons().then((res) => setCoupons(res.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createCoupon({ name, expiry, discount }, user.token)
      .then((res) => {
        setLoading(false);
        loadAllCoupons(); // load all coupons
        setName('');
        setDiscount('');
        setExpiry('');
        toast.success(`"${res.data.name}" is created`);
      })
      .catch((err) => console.log('create coupon err', err));
  };

  const handleRemove = (couponId) => {
    if (window.confirm('Delete?')) {
      setLoading(true);
      removeCoupon(couponId, user.token)
        .then((res) => {
          loadAllCoupons(); // load all coupons
          setLoading(false);
          toast.error(`Coupon "${res.data.name}" deleted`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Admin page={6}>
      <AdminDash>
        <Card>
          <div className='col-md-10 offset-md-1 my-5 white-color'>
            {loading ? (
              <h4 className='text-danger'>Loading...</h4>
            ) : (
              <h4 className='text-center blue-text my-4'>COUPONS</h4>
            )}

            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoFocus
                  required
                />
              </div>

              <div className='form-group'>
                <label className='text-muted'>Discount %</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  required
                />
              </div>

              <div className='form-group'>
                <label className='text-muted'>Expiry</label>
                <br />
                <DatePicker
                  className='form-control'
                  selected={new Date()}
                  value={expiry}
                  onChange={(date) => setExpiry(date)}
                  required
                />
              </div>

              <button className='btn btn-outline-primary'>Save</button>
            </form>

            <br />

            <h4 className='text-center blue-text my-4'>
              {coupons.length} Coupons
            </h4>
            <div className='table-responsive text-nowrap'>
              <table className='table table-striped table-bordered'>
                <thead className='black white-text'>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Expiry</th>
                    <th scope='col'>Discount</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {coupons.map((c) => (
                    <tr key={c._id} className='text-white '>
                      <td>{c.name}</td>
                      <td>{new Date(c.expiry).toLocaleDateString()}</td>
                      <td>{c.discount}%</td>
                      <td>
                        <DeleteOutlined
                          onClick={() => handleRemove(c._id)}
                          className='text-danger pointer'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </AdminDash>
    </Admin>
  );
};

export default CreateCouponPage;
