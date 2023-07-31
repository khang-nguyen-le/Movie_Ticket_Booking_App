import React, { useEffect, useState } from "react";
import { userServ } from "../../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/slices/userSlice";
import { message, Drawer, Button } from "antd";
import UserTable from "../../../components/UserTable/UserTable";
import FormAddUser from "../../../components/FormAddUser/FormAddUser";
import { setLoading } from "../../../redux/slices/loadingSlice";

const UserManagement = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.user);
  const [formIsReset, setFormIsReset] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    setFormIsReset(false)
  };

  const onClose = () => {
    setOpen(false);
    setFormIsReset(true)
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    if (notification) {
      messageApi.open({
        type: "error",
        content: notification,
      });
    }
  }, [notification]);

  return (
    <>
      {contextHolder}
      <Drawer
        title="Thêm người dùng"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <FormAddUser onClose={onClose} onResetForm={formIsReset} />
      </Drawer>

      <div className="page-title flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl text-gray-800">User</h2>
        <button
          type="button"
          onClick={showDrawer}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Thêm mới
        </button>
      </div>

      <UserTable onOpenDrawer={showDrawer} />
    </>
  );
};

export default UserManagement;
