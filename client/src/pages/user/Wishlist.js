import React from 'react';

import User from '../../components/UI/User';
import UserDash from '../../components/UI/UserDash';
import UserCard from '../../components/UI/UserCard';
const Wishlist = () => {
  return (
    <User page={3}>
      <UserDash>
        <UserCard>
          <div className='m-5'>
            <h4 className='text-center blue-text mt-2 pb-4'>WISHLIST</h4>
          </div>
        </UserCard>
      </UserDash>
    </User>
  );
};

export default Wishlist;
