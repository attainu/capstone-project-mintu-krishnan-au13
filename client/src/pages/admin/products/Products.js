import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createProduct } from '../../../functions/product';
import Admin from '../../../components/UI/Admin';
import AdminDash from '../../../components/UI/AdminDash';

const Products = () => {
  return (
    <Admin page={3}>
      <AdminDash></AdminDash>
    </Admin>
  );
};

export default Products;
