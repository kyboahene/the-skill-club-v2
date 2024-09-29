import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/modules/shared/components/custom-button";

const WhyJoin = () => {
  return (
    <div className="why-join container mx-auto md:w-5/6 lg:flex py-[5em] px-[1em] md:px-[4em]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40">
          <div className="flex flex-col gap-8">
            <div className="">
              <h1 className="header-font text-center lg:text-left text-[40px] md:text-[50px] font-normal ml-0 md:ml-16">
                Why Join?
              </h1>
            </div>

            <div className="relative flex justify-center lg:justify-start">
              <div className="h-[19.5em] w-[18em] md:h-[21em] md:w-[22em] z-10 relative">
                <Image
                  src="/images/why-join.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="why join"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="bg-black h-[19.5em] w-[18em] md:h-[21em] md:w-[22em] md:left-[7em] lg:left-[11px] rounded-[5px] absolute top-3 md:top-3 left-8 z-0"></div>
            </div>
          </div>
          <div className="mt-[4em] md:mt-0">
            <div className="text-[18px] p-6">
              <p>
                Are you a university student or a graduate that is skilled in
                your craft but not employed yet? If you answer yes to this, then
                you&apos;re the perfect fit for this platform.
              </p>
              <p className="my-16">
                <span className="font-bold">theskill.club</span> is built to
                serve as a bridge to connect authentic talent with
                Startups/Companies in need of talent to build or work on their
                projects remotely.
              </p>
              <p className="mb-14">
                When you sign up to be matched up with a company, you get to
                work in teams with experienced professionals.
                <br /> You&apos;ll be mentored by them and get paid what you
                deserve.
              </p>
              <Button text="Sign Up" link="/auth/signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
