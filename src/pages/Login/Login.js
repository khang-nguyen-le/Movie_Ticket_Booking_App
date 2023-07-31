import React, { useEffect } from "react";
import * as animationLogin from "./../../assets/animation/animation_login.json";
import Lottie from "react-lottie";
import FormLogin from "../../components/FormLogin/FormLogin";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector(state => state.user)
  useEffect(() => {
    if (user) {
      window.location.href = '/'
    }
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex max-w-screen-xl mx-auto">
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-11/12 max-w-sm p-6 bg-blue-50 rounded shadow-md">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
