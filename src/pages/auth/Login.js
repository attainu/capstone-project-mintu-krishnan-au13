import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { auth, googleAuthProvider } from '../../firebase';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined, GoogleOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
);
const Login = ({ history }) => {
  const [email, setEmail] = useState('mintu.krish999@gmail.com');
  const [password, setPassword] = useState('mintu12345');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      setLoading(false);
      toast.success('Logged in Successfully');
      history.push('/');
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

        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        toast.success('Logged in Successfully');
        history.push('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const loginForm = () => {
    return (
      <form className="my-2" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="Enter Email"
        />

        <input
          type="password"
          className="form-control py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <br />
        <Link to="/forgot/password" className="float-right text-danger">
          Forgot Password
        </Link>
        {!loading && (
          <Button
            onClick={handleSubmit}
            className="mt-4 btn btn-raised btn-primary"
            block
            shape="round"
            icon={<LoginOutlined />}
            size="large"
            disabled={!email || password.length < 6}
            type="submit"
          >
            Login
          </Button>
        )}
        {loading && (
          <Button
            className="mt-4 btn btn-raised btn-primary"
            block
            shape="round"
            size="large"
          >
            <Spin indicator={antIcon} />
          </Button>
        )}
      </form>
    );
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="my-2">Login</h2>
          <p className="h6 mb-5">
            Login to get exclusive deals, track your orders, earn rewards and
            more
          </p>

          {loginForm()}

          <Button
            onClick={googleLogin}
            className="mb-4 btn btn-raised "
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
            type="danger"
          >
            Login with Google
          </Button>

          <p className="text-center h6">
            By continuing you agree to our{' '}
            <a className="text-primary">Terms of Use </a> &
            <a className="text-primary"> Privacy Policy </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
