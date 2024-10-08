import React from "react";
import Image from "next/image";

//shared
import Button from "../shared/components/custom-button";

const CommunityPageTemplate = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="md:w-5/6 mx-auto pt-[7em] pb-[6em]">
        <div className="text-center">
          <h1 className="header-font text-center text-[30px] md:text-[40px]">
            Join Our Community
          </h1>
          <p className="text-center text-md">
            We&apos;re your quickest way to get hired as a student.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:flex-1 flex justify-center">
            <div className="h-[19.5em] w-[18em] md:h-[21em] md:w-[22em] z-10 relative">
              <Image
                layout="fill"
                alt="community"
                objectFit="cover"
                objectPosition="center"
                src="/images/community.svg"
              />
            </div>
          </div>
          <ul className="lg:flex-1 flex flex-col gap-6 text-sm list-disc px-8">
            <li>Get exclusive access to webinars with industry experts</li>
            <li>Connect with fellow talented students</li>
            <li>Get exclusive access to student events and fairs</li>
            <li>
              Get free and exclusive access to training and coupons to LMS
              platforms to upskill and get ready for the job market.
            </li>
            <li>
              Get your Resumes and cover letters reviewed from time to time at
              no cost
            </li>
            <li>
              Exclusive access to internship slots in the most sought after
              companies
            </li>
          </ul>
        </div>
        <div className="pt-8 md:pt-0 mx-5 flex justify-center md:mt-10">
          <Button link="https://t.me/+cNKWdbKKkEQ2MGY0" text="Join Now" />
        </div>
      </div>
    </section>
  );
};

export default CommunityPageTemplate;
