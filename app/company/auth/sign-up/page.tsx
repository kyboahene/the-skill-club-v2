import React from "react";
import { Metadata } from "next";

import SignUpPageTemplate from "@/modules/auth/templates/sign-up-page-template";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return <SignUpPageTemplate />;
};

export default SignUp;
