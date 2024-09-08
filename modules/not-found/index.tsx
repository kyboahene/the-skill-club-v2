import React from "react";
import Lottie from "react-lottie";

// lottie
import empty from "@/lottie/not-found.json";

// shared

// utils

// layout
import Navbar from "../layout/templates/main-nav";
import Button from "../shared/components/button";
import { defaultOptions } from "@/lib/utils";

const NotFoundPageTemplate = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-5/6 mx-auto mt-[14em]">
          <h1 className="font-bold text-3xl text-center">Page Not Found</h1>
          <p className="text-center">
            The page you are looking does not exist.
          </p>
          <div className="text-center mt-4 flex justify-center">
            <Button text="Go Home" link="/" />
          </div>
          <Lottie options={defaultOptions(empty)} height={400} width={400} />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPageTemplate;
