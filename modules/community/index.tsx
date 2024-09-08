/* eslint-disable @next/next/no-img-element */
import React from "react";

//shared
import Button from "../shared/components/button";

// layout
import Footer from "../layout/templates/footer";
import Navbar from "../layout/templates/main-nav";

const CommunityPageTemplate = () => {
  return (
    <main className="flex flex-col gap-10">
      <Navbar />
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
            <img
              src="/images/community.svg"
              alt="community"
              className="h-[20em] md:h-[25em]"
            />
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
      <Footer />
    </main>
  );
};

export default CommunityPageTemplate;
