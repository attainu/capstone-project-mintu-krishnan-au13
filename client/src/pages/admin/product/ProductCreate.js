import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createProduct } from '../../../functions/product';

const ProductCreate = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <AdminNav />

        <div className='col'>product create form</div>
      </div>
    </div>
  );
};

export default ProductCreate;
