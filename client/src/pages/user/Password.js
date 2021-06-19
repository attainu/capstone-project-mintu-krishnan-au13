import React, { useState } from 'react';
import UserNav from '../../components/nav/UserNav';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import User from '../../components/UI/User';
import UserDash from '../../components/UI/UserDash';
import UserCard from '../../components/UI/UserCard';

const Password = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword('');
        toast.success('Password updated');
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit} className='col-md-6 offset-md-3'>
      <div className='md-form form-group text-center'>
        <label>New Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='on'
          className='form-control'
          disabled={loading}
          value={password}
        />
        <button
          className='btn btn-default btn-block'
          disabled={!password || password.length < 6 || loading}
        >
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <User page={2}>
      <UserDash>
        <UserCard>
          <div className='m-5'>
            {loading ? (
              <h4 className='text-danger'>Loading..</h4>
            ) : (
              <h4 className='text-center blue-text mt-2 pb-4'>
                PASSWORD UPDATE
              </h4>
            )}

            {passwordUpdateForm()}
          </div>
        </UserCard>
      </UserDash>
    </User>
  );
};

export default Password;
