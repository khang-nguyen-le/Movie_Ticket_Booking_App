import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { userServ } from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, resetUpdatedUser } from "../../redux/slices/userSlice";
import { message } from "antd";
import { setLoading } from "../../redux/slices/loadingSlice";

const FormAddUser = (props) => {
  const { onResetForm } = props
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { updatedUser } = useSelector((state) => state.user);

  useEffect(() => {
    setValues(updatedUser);

  }, [updatedUser]);

  useEffect(() => {
    if (onResetForm == true) {
      dispatch(resetUpdatedUser())
      resetForm()
    }
  }, [onResetForm])

  const updateUserHandler = (values) => {
    dispatch(setLoading())
    const newValues = { ...values, soDt: values.soDT }
    userServ.updateUser(newValues)
      .then(res => {
        // console.log(res)
        messageApi.open({
          type: "success",
          content: "Cập nhật thành công",
        });

        dispatch(getAllUser())
        dispatch(setLoading())
        dispatch(resetUpdatedUser())
        resetForm();

        props.onClose()
      })
      .catch(err => {
        console.log(err)

        messageApi.open({
          type: "error",
          content: "Cập nhật thất bại. Vui lòng kiểm tra lại.",
        });

        dispatch(setLoading())
      })
  }

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: async (values) => {
      try {
        // console.log(values);
        const res = await userServ.addUser(values);
        dispatch(getAllUser());

        resetForm();
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { handleChange, handleSubmit, values, resetForm, setValues } = formik;

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={values.taiKhoan}
            onChange={handleChange}
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            readOnly={Object.keys(updatedUser).length !== 0 ? true : false}
          />
          <label
            htmlFor="taiKhoan"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tài khoản
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={values.hoTen}
            onChange={handleChange}
            type="text"
            name="hoTen"
            id="hoTen"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="hoTen"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ tên
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={values.matKhau}
            onChange={handleChange}
            type="password"
            name="matKhau"
            id="matKhau"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="matKhau"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mật Khẩu
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        {Object.keys(updatedUser).length === 0 ? (
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={values.soDt}
              onChange={handleChange}
              type="tel"
              name="soDt"
              id="soDt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="soDt"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
        ) : (
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={values.soDT}
              onChange={handleChange}
              type="tel"
              name="soDT"
              id="soDT"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="soDT"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
        )}

        <div className="relative z-0 w-full mb-6 group">
          <input
            value={values.maNhom}
            onChange={handleChange}
            type="text"
            name="maNhom"
            id="maNhom"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            readOnly={Object.keys(updatedUser).length !== 0 ? true : false}
          />
          <label
            htmlFor="maNhom"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mã nhóm
          </label>
        </div>

        <div className="mb-6">
          <label
            for="maLoaiNguoiDung"
            class="block mb-3 text-sm font-medium text-gray-900"
          >
            Chọn loại người dùng
          </label>
          <select
            onChange={handleChange}
            id="maLoaiNguoiDung"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={values.maLoaiNguoiDung}
            disabled={Object.keys(updatedUser).length !== 0 ? true : false}
          >
            <option>Loại người dùng</option>
            <option value="QuanTri">Quản trị</option>
            <option value="KhachHang">Khách hàng</option>
          </select>
        </div>

        {Object.keys(updatedUser).length === 0 ? (
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Thêm
          </button>
        ) : (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={() => {
              updateUserHandler(values)
            }}
          >
            Cập nhật
          </button>
        )}
      </form>
    </>

  );
};

export default FormAddUser;
