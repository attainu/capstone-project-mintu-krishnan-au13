import React, { useState, useEffect } from 'react';
import UserNav from '../../components/nav/UserNav';
import { getWishlist, removeWishlist } from '../../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

import User from '../../components/UI/User';
import UserDash from '../../components/UI/UserDash';
import UserCard from '../../components/UI/UserCard';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () =>
    getWishlist(user.token).then((res) => {
      console.log(res);
      setWishlist(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
    });

  return (
    <User page={3}>
      <UserDash>
        <UserCard>
          {' '}
          <div className='m-5'>
            <h4 className='text-center blue-text mt-2 pb-4'>WISHLIST</h4>

            {wishlist &&
              wishlist.map((p) => (
                <div key={p._id} className='alert alert-secondary'>
                  <Link to={`/product/${p.slug}`}>{p.title}</Link>
                  <span
                    onClick={() => handleRemove(p._id)}
                    className='btn btn-sm float-right'
                  >
                    <DeleteOutlined className='text-danger' />
                  </span>
                </div>
              ))}
          </div>
        </UserCard>
      </UserDash>
    </User>
  );
};

export default Wishlist;
