import SignUpPageTemplate from "@/modules/auth/templates/sign-up-page-template";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return <SignUpPageTemplate />;
};

export default SignUp;
