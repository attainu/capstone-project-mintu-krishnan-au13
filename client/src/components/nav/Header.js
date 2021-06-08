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
      style={{ background: '#002329' }}
    >
      <Item key='logo' className='mx-3'>
        <Link to='/'>
          <Title level={3} className='m-2' type='success'>
            CROMA
          </Title>
        </Link>
      </Item>

      <Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Item>

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
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          }
          title={user.email && user.email.split('@')[0]}
          className='float-right'
        >
          <Item key='setting:1'>View Profile</Item>
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
