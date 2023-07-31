import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormSignup from "../../components/FormSignup/FormSignup";
import "./Signup.scss";

const Signup = () => {
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, []);

  return (
    <section className="signup flex justify-center items-center">
      <div className="w-11/12 max-w-lg p-6 rounded-lg my-20 signup__form">
        <FormSignup />
      </div>
    </section>
  );
};

export default Signup;
