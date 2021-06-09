import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
);

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail('');
        setLoading(false);
        toast.success('Check your email for password reset link');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className='container col-md-6 offset-md-3 p-5'>
      <h4>Forgot Password</h4>

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className='form-control py-3'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Type your email'
          autoFocus
        />
        <br />
        {!loading && (
          <Button
            onClick={handleSubmit}
            className='my-2 px-5 btn btn-raised btn-warning'
            disabled={!email}
            size='large'
            icon={<LoginOutlined />}
            shape='round'
            block
          >
            Submit
          </Button>
        )}

        {loading && (
          <Button
            className='my-2 px-5 btn btn-raised btn-warning'
            size='large'
            shape='round'
            block
          >
            <Spin indicator={antIcon} />
          </Button>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
