import React from "react";
import * as animationLogin from "./../../../assets/animation/animation_login.json";
import Lottie from "react-lottie";
import FormLoginAdmin from "../../../components/FormLoginAdmin/FormLoginAdmin";


const LoginAdmin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex max-w-screen-xl mx-auto min-h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-11/12 max-w-sm p-6 bg-blue-50 rounded shadow-md h-min">
          <div className="text-center pt-3 pb-6">
            <h2 className="font-semibold text-2xl">Đăng nhập Admin</h2>
          </div>
          <FormLoginAdmin />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
