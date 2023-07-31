import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Space, Avatar, Dropdown } from 'antd'

import {
  UserOutlined,
  DownOutlined
} from "@ant-design/icons";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const dropdownItems = [
    {
      label: <a href="">Thông tin tài khoản</a>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a href="/login">
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
    <nav className="bg-gray-800 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movie Ticket
          </span>
        </NavLink>
        <div className="flex md:order-2">
          {user ? (
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
                  <p className="font-semibold text-white">{user.hoTen}</p>
                  <DownOutlined className="align-middle text-white" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <div>
              <NavLink to="/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Đăng nhập
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button
                  type="button"
                  className="text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ml-2"
                >
                  Đăng ký
                </button>
              </NavLink>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Lịch chiếu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cụm rạp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
