import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { auth, googleAuthProvider } from '../../firebase';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined, GoogleOutlined } from '@ant-design/icons';

import { createOrUpdateUser } from '../../functions/auth';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
);
const Login = ({ history }) => {
  const [email, setEmail] = useState('mintu.krish999@gmail.com');
  const [password, setPassword] = useState('mintu12345');
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
  }, [user, history]);

  const dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    if (res.data.role === 'admin') {
      history.push('/admin/dashboard');
    } else {
      history.push('/user/history');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: 'LOGGED_IN_USER',
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          setLoading(false);
          toast.success('Logged in Successfully');
          roleBasedRedirect(res);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            toast.success('Logged in Successfully');
            roleBasedRedirect(res);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const loginForm = () => {
    return (
      <>
        <form className='my-1' onSubmit={handleSubmit}>
          {/* <input
            type='email'
            className='form-control py-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            placeholder='Enter Email'
          /> */}
          <div className='md-form m-1'>
            <i className='fas fa-envelope prefix'></i>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              id='inputValidationEx'
              className='form-control validate'
            />
            <label
              for='inputValidationEx'
              // data-error='wrong'
              // data-success='right'
            >
              Type your email
            </label>
          </div>

          {/* <input
            type='password'
            className='form-control py-3'
            autoComplete='on'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          /> */}
          <div className='md-form m-1'>
            <i className='fas fa-lock prefix'></i>
            <input
              type='password'
              autoComplete='on'
              id='inputValidationEx2'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control validate'
            />
            <label
              for='inputValidationEx2'
              // data-error='wrong'
              // data-success='right'
            >
              Type your password
            </label>
          </div>

          <Link
            to='/forgot/password'
            className='mb-3 h6 float-right text-danger'
          >
            Forgot Password
          </Link>
          {!loading && (
            // <Button
            //   onClick={handleSubmit}
            //   className='mt-4 btn btn-raised btn-primary'
            //   block
            //   shape='round'
            //   icon={<LoginOutlined />}
            //   size='large'
            //   disabled={!email || password.length < 6}
            //   type='submit'
            // >
            //   <span
            //     class='spinner-grow spinner-grow-sm'
            //     role='status'
            //     aria-hidden='true'
            //   ></span>
            //   Login
            // </Button>
            <button
              onClick={handleSubmit}
              type='submit'
              class='btn btn-primary btn-rounded btn-block my-2'
              disabled={!email || password.length < 6}
            >
              <i class='mr-2 fas fa-sign-in-alt'></i>
              Login
            </button>
          )}
          {loading && (
            // <Button
            //   className='mt-4 btn btn-raised btn-primary'
            //   block
            //   shape='round'
            //   size='large'
            // >
            //   <Spin indicator={antIcon} />
            // </Button>
            <button
              type='submit'
              class='btn btn-primary btn-rounded btn-block my-2'
            >
              <span
                class='spinner-grow spinner-grow-sm'
                role='status'
                aria-hidden='true'
              ></span>
            </button>
          )}
        </form>
      </>
    );
  };

  return (
    <div className='container mt-3'>
      <div className='row d-flex justify-content-center'>
        <div className='card col-md-6 p-5'>
          <h2 className='my-2'>Login</h2>
          <p className='h6 mb-5'>
            Login to get exclusive deals, track your orders, earn rewards and
            more
          </p>

          {loginForm()}

          {/* <Button
            onClick={googleLogin}
            className='mb-4 btn btn-raised '
            block
            shape='round'
            // icon={<GoogleOutlined />}
            size='large'
            type='danger'
          >
            <i class='fab fa-google'></i>
            Login with Google
          </Button> */}
          <button
            type='button'
            class='btn btn-danger btn-rounded btn-block my-2'
            onClick={googleLogin}
          >
            <i class='mr-2  fab fa-google'></i>
            Login with Google
          </button>

          <p className='text-center h6'>
            By continuing you agree to our{' '}
            <a className='text-primary'>Terms of Use </a> &
            <a className='text-primary'> Privacy Policy </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
