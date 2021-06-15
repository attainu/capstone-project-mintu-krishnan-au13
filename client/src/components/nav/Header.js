import React, { useState } from 'react';
import { Menu, Typography, Avatar } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('home');
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    sessionStorage.removeItem('role');
    dispatch({
      type: 'LOGGED_OUT',
      payload: null,
    });
    history.push('/login');
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode='horizontal'
      theme='dark'
      style={{ background: '#14181f' }}
      className='fixed-top'
    >
      <Item key='logo' className='blue-bg-color'>
        <Link to='/'>
          <Title level={3} className='my-2  '>
            <i className='fab fa-opencart'> Croma</i>
          </Title>
        </Link>
      </Item>

      {/* <Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Item> */}

      {!user && (
        <Item key='register' icon={<UserAddOutlined />} className='float-right'>
          <Link to='/register'>Register</Link>
        </Item>
      )}

      {!user && (
        <Item key='login' className='float-right' icon={<UserOutlined />}>
          <Link to='/login'>Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          key='username'
          icon={
            user.picture ? (
              <img
                src={user.picture}
                className='rounded-circle z-depth-0'
                alt='avatar image'
                height='35'
              />
            ) : (
              <img
                src='https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg'
                className='rounded-circle z-depth-0'
                alt='avatar image'
                height='35'
              />
            )
          }
          title={user.name}
          className='float-right'
        >
          {user && user.role === 'admin' && (
            <Item key='setting:1'>
              <Link to='/admin/dashboard'>Dashboard</Link>
            </Item>
          )}
          {user && user.role === 'subscriber' && (
            <Item key='setting:1'>
              <Link to='/user/history'>Profile</Link>
            </Item>
          )}

          <Item key='setting:2'>Settings</Item>
          <Item key='logout' icon={<LogoutOutlined />} onClick={logout}>
            LogOut
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Header;
