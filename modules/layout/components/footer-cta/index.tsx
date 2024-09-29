import Button from "@/modules/shared/components/custom-button";
import React from "react";

const FooterCTA = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="header-font text-center text-[30px] lg:text-[100px] md:text-[35px]">
        Join Community
      </h1>
      <p className="md:text-[18px]">
        We&apos;re your quickest way to get hired.
      </p>
      <div className="flex justify-center mt-6">
        <Button text="Join today" link="/community" />
      </div>
    </div>
  );
};

export default FooterCTA;
