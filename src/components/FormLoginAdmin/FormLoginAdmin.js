import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userServ } from "../../services/userServices";
import { saveLocal } from "../../utils/localStore";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const FormLoginAdmin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values);

      userServ
        .login(values)
        .then((res) => {
          // console.log(res);

          // Điều kiện để vào trang admin, check maLoaiNguoiDung
          if (res.data.content.maLoaiNguoiDung === "QuanTri") {
            // Lưu thông tin xuống local và chuyển hướng trang sau khi đăng nhập thành công
            saveLocal("user", res.data.content);

            navigate("/admin");
          } else {
            // Đưa user về trang chủ nếu tài khoản không phải là tài khoản admin
            window.location.href = "http://localhost:3000";
          }
        })
        .catch((err) => {
          console.log(err);

          // Hiển thị thông báo nếu tài khoản, mật khẩu không chính xác
          messageApi.open({
            type: "error",
            content: err.response.data.content,
          });

          // Xóa giá trị input bằng phương thức fomik.resetForm
          resetForm();
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản."),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu."),
    }),
  });

  const { handleSubmit, handleChange, handleBlur, values, resetForm } = formik;

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
            id="taiKhoan"
            name="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            placeholder="movieticket"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.taiKhoan}
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="text-red-700">{formik.errors.taiKhoan}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            id="matKhau"
            type="password"
            name="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.matKhau}
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="text-red-700">{formik.errors.matKhau}</p>
          ) : null}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  );
};

export default FormLoginAdmin;
