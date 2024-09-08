import React from "react";
import Link from "next/link";
import Image from "next/image";

// component
import LoginForm from "../../components/login-form";

const LoginPageTemplate = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="size-full bg-[url('/images/login-bg.jpg')] hidden lg:block bg-cover bg-center rounded-[35px] m-4"></div>
      <div className="flex flex-col justify-between items-center py-6">
        <Link href="/" passHref>
          <div className="flex items-center">
            <div className="relative h-[5em] w-[5em]">
              <Image
                src="/theskillclub-black.svg"
                alt="the skill club"
                layout="fill"
              />
            </div>
            <span className="text-black text-center bg-gradient-to-r from-yellow to-green uppercase font-bold text-[12px] px-1.5 pt-[2px] rounded-md">
              beta
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-5">
          <h1 className="header-font font-bold text-[30px] text-center">
            Welcome Back
          </h1>
          <div className="form flex justify-center">
            <LoginForm />
          </div>
        </div>

        <div className="flex justify-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="mx-1 hover:underline font-bold"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPageTemplate;
