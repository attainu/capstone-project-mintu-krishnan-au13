import React from 'react';
import UserNav from '../nav/UserNav';

const User = ({ children, page }) => {
  return (
    <div className='container-fluid white-bg-color'>
      <div className='row'>
        <UserNav page={page} />
        {children}
      </div>
    </div>
  );
};

export default User;
