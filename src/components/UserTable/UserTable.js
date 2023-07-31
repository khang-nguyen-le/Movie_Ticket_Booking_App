import React, { useRef, useState } from "react";
import { Button, message, Popconfirm, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userServ } from "../../services/userServices";
import { getAllUser, getUserThunk } from "../../redux/slices/userSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import "./UserTable.scss";

const UserTable = (props) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [messageApi, contextHolder] = message.useMessage();
  const [size, setSize] = useState("default");
  const ref = useRef();
  const cancel = (e) => {
    console.log(e);
  };

  const deleteUserHandler = (record) => {
    dispatch(setLoading());
    userServ
      .deleteUser(record.taiKhoan)
      .then((res) => {
        messageApi.open({
          type: "success",
          content: "Xóa người dùng thành công",
        });

        dispatch(getAllUser());
        dispatch(setLoading());
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Xóa người dùng thất bại",
        });
        dispatch(setLoading());
      });
  };

  const getUserHandler = (record) => {
    dispatch(setLoading());
    userServ
      .getUser(record.taiKhoan)
      .then((res) => {
        console.log(res);
        props.onOpenDrawer();
        dispatch(getUserThunk(res.data.content.taiKhoan));
        dispatch(setLoading());
      })
      .catch((err) => {
        console.log(err);
        messageApi.open({
          type: "error",
          content: "Đã xảy ra lỗi. Vui lòng thử lại!",
        });
        dispatch(setLoading());
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại tài khoản",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        // Tham số text chứa các giá trị của thuộc tính đó trong data
        // Tham số record chứa các phần tử trong mảng data
        // Tham số index là vị trí của các phần tử trong mảng data

        return (
          <Tag color={text === "QuanTri" ? "magenta" : "blue"}>
            {text === "QuanTri" ? "Quản trị" : "Khách hàng"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="actions flex gap-2">
          <Popconfirm
            title="Xóa người dùng"
            description={`Bạn có chắc chắn muốn xóa ${record.taiKhoan} không?`}
            onConfirm={() => {
              deleteUserHandler(record);
            }}
            onCancel={cancel}
            okText="Xóa"
            cancelText="Hủy"
            okType="danger"
          >
            <div className="iconBtnWrapper">
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                size={size}
                className="deleteBtn"
              />
            </div>
          </Popconfirm>

          <div className="iconBtnWrapper">
            <Button
              type="primary"
              icon={<EditOutlined />}
              size={size}
              className="editBtn"
              onClick={() => {
                getUserHandler(record);
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  let newUsers = users.map((item, index) => {
    return {
      ...item,
      id: index + 1,
    };
  });

  return (
    <>
      {contextHolder}
      <Table columns={columns} dataSource={newUsers} />
    </>
  );
};

export default UserTable;
