"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Modes = () => {
  const isTablet = useMediaQuery({ maxWidth: 800 });

  return (
    <div className="bg-ash">
      <div className="container mx-auto md:w-5/6 pt-[5em] pb-[9em] md:px-0 lg:px-[8em]">
        <h1 className="header-font text-center text-[30px] md:text-[50px] font-normal">
          Our Modes
        </h1>
        <p className="text-[18px] text-center">
          You are allowed to select a mode when setting up your Profile.
        </p>
        <div className="mt-16 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[5px] w-full">
              <div className="relative h-[13em] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657476664/theSkillClub/Integrate_wkmwgg.jpg"
                  alt="contract"
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  placeholder="blur"
                  className="mode-image"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className=" px-[1em] py-[1.4em]">
                <h4 className="cabinet-bold text-md mb-3">
                  Entry Level (Integrate)
                </h4>
                <p className="text-[14px]">
                  This mode is only available for university seniors and fresh
                  graduates. It is designed for companies (Startups) looking to
                  hire talented students in their final year/fresh graduates and
                  steadily integrate them into their workforce.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-[5px]">
              <div className="image-container relative h-[13em] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657470891/theSkillClub/intern_w5azfo.jpg"
                  alt="contract"
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  placeholder="blur"
                  className="mode-image"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="px-[1em] py-[1.4em]">
                <h4 className="cabinet-bold text-md mb-3">Internship</h4>
                <p className="text-[14px]">
                  This mode is for students and graduates looking for paid
                  internship opportunities.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-[5px]">
              <div className="image-container relative h-[13em] border overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657476663/theSkillClub/software-developer-reading-freelancer-contract_a4sncx.jpg"
                  alt="contract"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  className="mode-image"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="px-[1em] py-[1.4em]">
                <h4 className="cabinet-bold text-md mb-3">Contract</h4>
                <p className="text-[14px]">
                  Selecting this mode will aid us in matching you up with
                  projects that need talents within a specific time frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modes;
