import React from "react";

// UI
import Button from "@/modules/shared/components/custom-button";

const HowToHire = () => {
  return (
    <>
      <div className="container mx-auto md:w-5/6 pt-[7em] pb-[13em] md:pb-[10em] px-[2em] md:px-[4em]">
        <h1 className="header-font text-center text-[30px] md:text-[50px] font-normal">
          Our Process
        </h1>
        <p className="md:text-[18px] text-center lg:w-1/2 mx-auto">
          Follow these steps to hire talents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 text-[16px]">
          <div className="relative flex-1 lg:pl-10 lg:mt-10">
            <span className="absolute text-[160px] left-0 -top-[5rem] font-bold opacity-25 text-yellow">
              1
            </span>
            <p className="font-bold my-6 text-[15px]">Sign Up</p>
            <p className="text-sm">
              Fill up the company form which includes key details which will be
              used to filter out the right candidates for you.
            </p>
          </div>
          <div className="relative flex-1 my-[3em] md:my-0 lg:pl-10 lg:mt-10">
            <span className="absolute text-[160px] left-0 -top-[5rem] font-bold opacity-25 text-yellow">
              2
            </span>
            <p className="font-bold my-6 text-[15px]">
              Review filtered candidates
            </p>
            <p className="text-sm">
              Check through the provided list of vetted potential talents for
              your company/project. Do a quick review of your picks via our
              built-in video scheduling feature to check which talent fits your
              company best.
            </p>
          </div>
          <div className="relative flex-1 lg:pl-10 lg:mt-10">
            <span className="absolute text-[160px] left-0 -top-[5rem] font-bold opacity-25 text-yellow">
              3
            </span>
            <p className="font-bold my-6 text-[15px]">
              Onboard your preferred candidates
            </p>
            <p className="text-sm">
              Onboard your selected candidates as new team members seamlessly,
              using our dashboard.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button text="Start for free" link="/for-companies" />
        </div>
      </div>
    </>
  );
};

export default HowToHire;
