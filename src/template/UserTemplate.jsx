import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const UserTemplate = () => {
  const { loading } = useSelector((state) => state.loading);

  return (
    <Spin spinning={loading}>
      <Header />
      <Outlet />
      <Footer />
    </Spin>
  );
};

export default UserTemplate;
