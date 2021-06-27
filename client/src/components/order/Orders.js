import React from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import ShowPaymentInfo from '../cards/ShowPaymentInfo';

const Orders = ({ orders, handleStatusChange }) => {
  const showOrderInTable = (order) => (
    <div className='m-5'>
      <table className=' table border border-primary'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Color</th>
            <th scope='col'>Count</th>
            <th scope='col'>Shipping</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((p, i) => (
            <tr key={i} className='white-color'>
              <td>
                <b>{p.product.title}</b>
              </td>
              <td>{p.product.price}</td>
              <td>{p.product.brand}</td>
              <td>{p.color}</td>
              <td>{p.count}</td>
              <td>
                {p.product.shipping === 'Yes' ? (
                  <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                  <CloseCircleOutlined style={{ color: 'red' }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className=''>
      {orders.map((order) => (
        <div key={order._id} className='row pb-5'>
          <div className='w-100 card m-4 dark-bg-color white-color'>
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className='row mx-5 '>
              <div className='col-md-4 '>Delivery Status</div>
              <div className='col-md-8 '>
                {/* {JSON.stringify(order.paymentIntent.payment_method_types[0])} */}
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className=' form-control'
                  defaultValue={order.orderStatus}
                  name='status'
                >
                  <option value='Not Processed'>Not Processed</option>
                  <option value='Processing'>Processing</option>
                  <option value='Dispatched'>Dispatched</option>
                  <option value='Cancelled'>Cancelled</option>
                  <option value='Completed'>Delivered</option>
                </select>
              </div>
            </div>
            {showOrderInTable(order)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
