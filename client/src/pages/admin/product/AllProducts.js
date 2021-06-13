import React, { useEffect, useState } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { getProductsByCount } from '../../../functions/product';
import AdminProductCard from '../../../components/cards/AdminProductCard';
import { removeProduct } from '../../../functions/product';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Admin from '../../../components/UI/Admin';
import WiderAdminDash from '../../../components/UI/WiderAdminDash';
import Card from '../../../components/UI/Card';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm('Delete?')) {
      // console.log("send delete request", slug);
      removeProduct(slug, user.token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    // <div className='container-fluid'>
    //   <div className='row'>
    //     <div className='col-md-2'>
    //       <AdminNav />
    //     </div>
    <Admin page={3}>
      <WiderAdminDash>
        <Card>
          {loading ? (
            <h4 className='text-danger'>Loading...</h4>
          ) : (
            <h4 className='text-center blue-text my-4'>ALL PRODUCTS</h4>
          )}
        </Card>
        <div className='row mt-4'>
          {products.map((product) => (
            <div key={product._id} className='col-lg-3 col-md-4 mb-4 '>
              <AdminProductCard product={product} handleRemove={handleRemove} />
            </div>
          ))}
        </div>
      </WiderAdminDash>
    </Admin>
    //   </div>
    // </div>
  );
};

export default AllProducts;
