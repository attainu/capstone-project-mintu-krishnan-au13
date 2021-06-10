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

const AdminNav = ({ page }) => {
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
    <div>
      <Menu
        defaultSelectedKeys={[`${page}`]}
        // defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        style={{ background: '#002329', height: '100vh' }}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          <Link to='/admin/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          <Link to='/admin/product'>Product</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          <Link to='/admin/products'>Products</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<AppstoreOutlined />}>
          <Link to='/admin/category'>Category</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<MailOutlined />}>
          <Link to='/admin/sub'>Sub Category</Link>
        </Menu.Item>
        <Menu.Item key='6' icon={<AppstoreOutlined />}>
          <Link to='/admin/coupon'>Coupon</Link>
        </Menu.Item>
        <Menu.Item key='7' icon={<MailOutlined />}>
          <Link to='/user/password'>Password</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AdminNav;
