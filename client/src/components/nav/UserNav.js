import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const UserNav = ({ page }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 576);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 576;
        if (ismobile !== collapsed) {
          setCollapsed(ismobile);
        }
      },
      false
    );
  }, [collapsed]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='position-fixed '>
      <Menu
        defaultSelectedKeys={[`${page}`]}
        // defaultOpenKeys={['sub1']}
        mode='inline'
        style={{ minHeight: '100vh', height: '100vh' }}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key='0' icon={<PieChartOutlined />}>
          <Link to='/user/history'>History</Link>
        </Menu.Item>
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          <Link to='/user/history'>History</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          <Link to='/user/password'>Password</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          <Link to='/user/wishlist'>Wishlist</Link>
        </Menu.Item>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default UserNav;
