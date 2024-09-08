import React from "react";
import { Metadata } from "next";

import ResetPasswordPageTemplate from "@/modules/auth/templates/reset-password-template";

export const metadata: Metadata = {
  title: "Reset Password",
};

const ResetPassword = () => {
  return <ResetPasswordPageTemplate />;
};

export default ResetPassword;
