import React from "react";
import { Metadata } from "next";

import ForgetPasswordPageTemplate from "@/modules/auth/templates/forget-password-page-template";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPassword = () => {
  return <ForgetPasswordPageTemplate />;
};

export default ForgotPassword;
