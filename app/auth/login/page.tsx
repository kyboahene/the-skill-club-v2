import React from "react";
import { Metadata } from "next";

import LoginPageTemplate from "@/modules/auth/templates/login-page-template";

export const metadata: Metadata = {
  title: "Login",
};

const LogIn = () => {
  return <LoginPageTemplate />;
};

export default LogIn;
