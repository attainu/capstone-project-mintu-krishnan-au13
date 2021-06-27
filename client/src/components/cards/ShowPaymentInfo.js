import React from 'react';

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div className='m-5 d-flex flex-column align-items-stretch'>
    <div className='row m-2'>
      <div className='col'>
        <span>
          <b>ORDER ID :</b> {order.paymentIntent.id}
        </span>
      </div>
      <div className='col '>
        <span>
          <b>AMOUNT : </b>
          {(order.paymentIntent.amount /= 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
          })}
        </span>
      </div>
    </div>
    <div className='row m-2'>
      <div className='col'>
        <span>
          <b>CURRENCY : </b>
          {order.paymentIntent.currency.toUpperCase()}
        </span>
      </div>
      <div className='col'>
        <span>
          <b>METHOD : </b>
          {order.paymentIntent.payment_method_types[0]}
        </span>
      </div>
    </div>
    <div className='row m-2'>
      <div className='col'>
        <span>
          <b>PAYMENT : </b>
          {order.paymentIntent.status.toUpperCase()}
        </span>
      </div>
      <div className='col'>
        <span>
          <b>ORDERED ON : </b>
          {new Date(order.paymentIntent.created * 1000).toLocaleString()}
        </span>
      </div>
    </div>
    <div className='row text-center align-items-center m-2'>
      <div className='col'>
        <span className='badge bg-default dark-color p-3'>
          STATUS: {order.orderStatus}
        </span>
      </div>
    </div>
  </div>
);

export default ShowPaymentInfo;
