import React from "react";

// components
import ResetPasswordForm from "../../components/reset-password-form";

const ResetPasswordPageTemplate = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="header-font font-bold text-[30px] text-center">
          Reset Password
        </h1>
        <p className="text-center">Enter your new password</p>
        <div className="form flex justify-center">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPageTemplate;
