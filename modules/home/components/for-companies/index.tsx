"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@/modules/shared/components/button";
import React, { useState } from "react";

const ForCompanies = () => {
  const [selected, setSelected] = useState("Hire Talents");
  const opportunities = ["Hire Talents", "Post a Job"];

  return (
    <div className="bg-[#171717] text-white">
      <div className="container mx-auto md:w-5/6 md:flex pt-[2em] pb-[8em] px-[2em] md:px-[4em]">
        <div className="lg:w-1/2">
          <h1 className="for-company header-font text-[30px] md:text-[50px] font-normal">
            Startup/Company?
          </h1>
          <p className="text-[18px]">
            Interested in hiring vetted talents for both technical &
            non-technical roles?
          </p>
          <p className="text-[18px]">You&apos;re at the right place.</p>
          <p className="text-[18px] my-16">
            <span className="font-bold">theskill.club</span> dashboard furnishes
            your HR department with a database of vetted young and vibrant
            talent they can scout.
          </p>
          <p className="text-[18px]">
            Are you hiring for long term, contract based or for an internship
            program? Our Modes will take care of your needs whiles making
            available to you the right candidate.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657469640/theSkillClub/image-one_pdia2v.png"
            alt="company"
            className="hidden md:block absolute top-[-4em] md:left-[12em]"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657469642/theSkillClub/image-two_bkmmrk.png"
            alt="company"
            className="hidden md:block absolute top-[14em] md:left-[5em] z-50"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/djaqvywi0/image/upload/v1657469639/theSkillClub/image-three_nq7lxo.png"
            alt="company"
            className="hidden md:block absolute top-[26em] md:left-[15em] z-50"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container mx-auto lg:mt-[15em]">
        <div>
          <h1 className="text-[24px] text-center">
            We Give you the Opportunity to;
          </h1>
          <div className="flex justify-center text-[20px] md:text-[22px] mt-10 mb-20 md:mb-10">
            <div className="relative flex gap-24">
              {opportunities.map((opp, index) => (
                <p
                  className={`${
                    selected === opp ? "text-white" : " text-gray-600 flex-1"
                  } cursor-pointer`}
                  onClick={() => setSelected(opp)}
                  key={index}
                >
                  {opp}
                  {selected === opp ? (
                    <img
                      src="/images/line.svg"
                      className="w-[6em]"
                      alt="Line"
                    />
                  ) : (
                    ""
                  )}
                </p>
              ))}
            </div>
          </div>
          {/* src={`${
                      selected === opportunities[0]
                        ? "https://res.cloudinary.com/djaqvywi0/image/upload/v1657469643/theSkillClub/hire-talent_bc0btw.png"
                        : "/images/job_card.png"
                    }`} */}
          <div className="lg:flex md:px-[4em]">
            <div className="lg:w-1/3">
              <div className="relative flex justify-center lg:justify-start">
                <div className="h-[19.5em] w-[18em] md:h-[21em] md:w-[22em] z-10 relative">
                  <Image
                    src={`${
                      selected === opportunities[0]
                        ? "https://res.cloudinary.com/djaqvywi0/image/upload/v1657469643/theSkillClub/hire-talent_bc0btw.png"
                        : "/images/job_card.png"
                    }`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="why join"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="bg-white h-[19.5em] w-[18em] md:h-[21em] md:w-[22em] md:left-[7em] lg:left-[11px] rounded-[5px] absolute top-3 md:top-3 left-4 z-0"></div>
              </div>
            </div>
            <div className="lg:w-2/3 md:px-10 lg:px-20 pb-20 mt-8">
              <div className="text-[18px]">
                {selected === opportunities[0] ? (
                  <p>
                    Are you hiring for long term, contract based or for an
                    internship program? <br />
                    Our dashboard gives you the ability to scout through
                    thousand&apos;s of young , skilled and vetted talents to
                    cater for company&apos;s human resource needs your needs.
                  </p>
                ) : (
                  <p>
                    Want to post a role so talents can out to you and not you
                    scouting through our suggestions of the right fit for your
                    needs? We got you covered. <br />
                    Our dashboard gives you the ability to post job and follow
                    through the process till the onboarding stage.
                  </p>
                )}
                <div className="my-16">
                  <h1 className="text-[24px]">The Dashboard Offers</h1>
                  <ul className="list-disc flex flex-col gap-2 mt-2">
                    <li>Both a snapshot & detailed view of each candidate.</li>
                    <li>Send messages directly to candidate.</li>
                    <li>Analytics of your operations on theskill.club.</li>
                    <li>
                      Handles the entire hiring process and notifies you of any
                      new development during your hiring process.
                    </li>
                    <li>
                      Schedule video meetings between your HR manager and
                      candidate.
                    </li>
                  </ul>
                </div>

                <Button link="for-companies" text="Start for free" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCompanies;
