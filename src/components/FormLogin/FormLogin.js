import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { userServ } from "../../services/userServices";
import { saveLocal } from "../../utils/localStore";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const FormLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values);

      // Xử lý gửi dữ liệu lên server
      userServ
        .login(values)
        .then((res) => {
          // console.log(res);

          messageApi.open({
            type: "success",
            content: "Đăng nhập thành công",
          });

          dispatch(setUser(res.data.content));

          // Lưu thông tin xuống local và chuyển hướng trang sau khi đăng nhập thành công
          saveLocal("user", res.data.content);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          console.log(err);

          messageApi.open({
            type: "error",
            content: err.response.data.content,
          });
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản."),
      matKhau: Yup.string()
        .required("Vui lòng nhập mật khẩu!")
        .min(8, "Mật khẩu chứa ít nhất 8 ký tự."),
    }),
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tài khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="movieticket"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.taiKhoan && touched.taiKhoan ? <p>{errors.taiKhoan}</p> : ""}
        </div>
        <div className="mb-6">
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            name="matKhau"
            id="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.matKhau && touched.matKhau ? <p>{errors.matKhau}</p> : ""}
        </div>
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-900">
            Bạn chưa có tài khoản?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline hover:text-blue-600"
            >
              Đăng ký
            </a>
          </span>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đăng nhập
        </button>
      </form>
    </>
  );
};

export default FormLogin;
