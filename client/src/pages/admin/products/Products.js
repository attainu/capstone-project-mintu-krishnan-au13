import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createProduct } from '../../../functions/product';
import Admin from '../../../components/UI/Admin';
import AdminDash from '../../../components/UI/AdminDash';
import Card from '../../../components/UI/Card';

const Products = () => {
  return (
    <Admin page={3}>
      <AdminDash>
        <Card>
          <h1> ALL PRODUCTS</h1>
        </Card>
      </AdminDash>
    </Admin>
  );
};

export default Products;
