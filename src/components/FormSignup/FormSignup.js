import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { userServ } from "../../services/userServices";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const FormSignup = () => {
  const navigate = useNavigate();
  const phoneRegExp = /^\d{10}$/;
  const fullNameRegExp = /^[\p{L} ]+$/u;
  const [messageApi, contextHolder] = message.useMessage();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      // console.log(values);

      userServ
        .createUser(values)
        .then((res) => {
          messageApi.open({
            type: "success",
            content: "Đăng ký tài khoản thành công",
          });

          setTimeout(() => {
            navigate("/login");
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
        .required("Vui lòng nhập mật khẩu.")
        .min(8, "Mật khẩu chứa ít nhất 8 kí tự.")
        .max(20, "Mật khẩu chứa tối đa 20 kí tự."),
      email: Yup.string()
        .required("Vui lòng nhập địa chỉ email.")
        .email("Email không hợp lệ."),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại.")
        .matches(phoneRegExp, "Số điện thoại không hợp lệ."),
      hoTen: Yup.string()
        .required("Vui lòng nhập họ tên.")
        .matches(fullNameRegExp, "Họ tên không hợp lệ."),
    }),
  });

  const { handleChange, handleBlur, handleSubmit, errors, touched } = formik;

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit} className="my-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">Tạo tài khoản mới</h2>
        </div>
        <div className="mb-3">
          <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Tài khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-gray-200 mt-2 text-xs">{errors.taiKhoan}</p>
          ) : (
            <p className="text-gray-200 mt-2 text-xs">&nbsp;</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            name="matKhau"
            id="password"
            className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.matKhau && touched.matKhau ? (
            <p className="text-gray-200 mt-2 text-xs">{errors.matKhau}</p>
          ) : (
            <p className="text-gray-200 mt-2 text-xs">&nbsp;</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="hoTen"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Họ tên
          </label>
          <input
            type="text"
            name="hoTen"
            id="hoTen"
            className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.hoTen && touched.hoTen ? (
            <p className="text-gray-200 mt-2 text-xs">{errors.hoTen}</p>
          ) : (
            <p className="text-gray-200 mt-2 text-xs">&nbsp;</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-gray-200 mt-2 text-xs">{errors.email}</p>
          ) : (
            <p className="text-gray-200 mt-2 text-xs">&nbsp;</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="tel"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Số điện thoại
          </label>
          <input
            type="tel"
            name="soDt"
            className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.soDt && touched.soDt ? (
            <p className="text-gray-200 mt-2 text-xs">{errors.soDt}</p>
          ) : (
            <p className="text-gray-200 mt-2 text-xs">&nbsp;</p>
          )}
        </div>
        <div className="mb-10">
          <label
            htmlFor="maNhom"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Mã nhóm
          </label>
          <select
            id="maNhom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="GP01" selected>
              GP01
            </option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP10">GP10</option>
            <option value="GP11">GP11</option>
            <option value="GP12">GP12</option>
            <option value="GP13">GP13</option>
            <option value="GP14">GP14</option>
            <option value="GP15">GP15</option>
          </select>
        </div>
        <div className="mb-6 text-center">
          <span className="text-sm font-medium text-white">
            Bạn đã có tài khoản?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline hover:text-blue-600"
            >
              Đăng nhập
            </a>
          </span>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSignup;
