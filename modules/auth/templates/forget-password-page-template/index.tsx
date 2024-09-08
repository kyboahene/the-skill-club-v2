import React from "react";

// components
import ForgetPasswordForm from "../../components/forget-password-form";

const ForgetPasswordPageTemplate = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <h1 className="header-font font-bold text-[30px] text-center">
          Forgot Password
        </h1>
        <p className="text-center">Enter your email to reset your password</p>
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPasswordPageTemplate;
