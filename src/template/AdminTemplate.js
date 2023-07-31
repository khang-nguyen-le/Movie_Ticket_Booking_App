import React, { useEffect, useState } from "react";
import { Spin, Dropdown, Space, Button, Avatar } from 'antd';

import {
  CalendarOutlined,
  VideoCameraOutlined,
  UserOutlined,
  DownOutlined
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLocal } from "../utils/localStore";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to="/admin/user">User</NavLink>, "1", <UserOutlined />),
  getItem(
    <NavLink to="/admin/movie">Movie</NavLink>,
    "2",
    <VideoCameraOutlined />
  ),
  getItem(
    <NavLink to="/admin/showtime">Showtime</NavLink>,
    "3",
    <CalendarOutlined />
  ),
];

const AdminTemplate = () => {
  const { loading } = useSelector(state => state.loading)
  const [collapsed, setCollapsed] = useState(false);
  const [username, setUserName] = useState('')

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const user = getLocal('user')

    if (user) {
      if (user.maLoaiNguoiDung !== 'QuanTri') {
        window.location.href = 'http://localhost:3000'
      } else {
        setUserName(user.taiKhoan)
      }
    } else {
      window.location.href = '/admin/login'
    }
  }, [])

  const dropdownItems = [
    {
      label: <a href="">Thông tin tài khoản</a>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a href="admin/login">
        Đăng xuất
      </a>,
      key: '2',
    },
  ];

  const logoutHandler = (e) => {
    if (e.key === '2') {
      localStorage.removeItem('user')
    }
  };

  return (
    <Spin spinning={loading}>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo flex items-center py-4 justify-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Movie Admin
            </span>
          </div>

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "flex-end"
            }}

          >
            <Dropdown
              menu={{
                items: dropdownItems,
                onClick: logoutHandler

              }}
              trigger={['click']}
              placement="bottomRight"
            >
              <a onClick={(e) => e.preventDefault()} className="mr-6">
                <Space>
                  <Avatar icon={<UserOutlined />} className="flex justify-center items-center" />
                  <p className="font-semibold">{username}</p>
                  <DownOutlined className="align-middle" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                </Space>
              </a>
            </Dropdown>
          </Header>

          <Content
            style={{
              margin: "0 16px",
            }}
          >

            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            <div className="min-h-fit p-6 bg-white mb-4">
              <Outlet />
            </div>
          </Content>
        </Layout>

      </Layout>
    </Spin >
  );
};

export default AdminTemplate;
