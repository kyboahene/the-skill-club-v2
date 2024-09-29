"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTypewriter, Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const { text } = useTypewriter({
    words: ["DEVELOPER?", "DESIGNER?", "WRITER?"],
    loop: 0,
    typeSpeed: 400,
    deleteSpeed: 400,
  });

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push(`/auth/signup?qEmail=${email}`);
  }

  return (
    <div className="relative bg-black bg-cover bg-center h-screen">
      <div className="container mx-auto md:w-5/6">
        <div className="z-50 relative text-white h-screen flex justify-center items-center">
          <div className="w-5/6 relative mt-8 text-center">
            <div className="flex justify-center items-center">
              <Link href="/company/auth/sign-up">
                <div className="relative mb-8 lg:mb-0 group rounded-[35px] bg-black cursor-pointer shadow-md py-[6px] md:py-[6px] px-[10px] md:px-[14px] flex justify-center items-center gap-4 group bg-surface-subtle border-2 border-ash hover:border-green border-opacity-100 active:border-opacity-100 outline-none ring-0 ring-yellow hover:ring-[3px] focus:ring-[5px] active:ring-[1px] ring-opacity-0 hover:ring-opacity-30 focus:ring-opacity-30 active:ring-opacity-30 transition-all duration-500 ease-out">
                  <span className=" animate-pulse h-2 w-2 rounded-full bg-green"></span>
                  <p className="text-ash text-sm">Hire talents</p>
                </div>
              </Link>
            </div>
            <h1 className="text-[30px] md:text-[90px] header-font font-bold">
              Are you a
            </h1>
            <div className="p-2 md:p-0">
              <h1 className="header-font font-bold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#f5e800] to-[#7eed5e] md:text-[90px]">
                <Typewriter
                  words={[
                    "Developer?",
                    "Product Designer?",
                    "Writer?",
                    "Graphic Designer?",
                    "Content Creator?",
                    "Social Media Manager?",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={100}
                />
              </h1>
            </div>
            <p className="text-[24px] md:text-[24px] text-ash">
              Gain work experience, mentorship <br /> & Get Paid whilst doing
              it.
            </p>
            <div className="flex justify-center mt-6">
              <form
                className="relative py-2 self-center pr-4 pl-6 flex gap-3 border-2 border-ash mt-12 rounded-[45px] w-full lg:w-2/4"
                onSubmit={handleSignUp}
              >
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-[3] text-white py-2 md:py-3 bg-inherit w-full"
                />
                <button
                  type="submit"
                  className="flex-[1] max-sm:absolute max-sm:right-2 rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e] px-3 py-2 md:px-3 md:py-2 text-black"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
