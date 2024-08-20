import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterCTA from "../../components/footer-cta";
import FooterNav from "../../components/footer-nav";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-tl-[35px] rounded-tr-[35px] relative">
      <div className="mx-auto md:w-5/6 md:px-16 mt-2 md:mt-0 py-16 px-6 text-center">
        <FooterCTA />
        <FooterNav />
        <div className="flex flex-col lg:flex-row items-center justify-between md:border-t-[0.5px] border-gray-500 py-3">
          <Link href="/">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="h-[2em] w-[4em] mb-4 flex items-center relative">
                  <Image
                    src="/theskillclub.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="the skill club"
                  />
                </div>
                <span className="text-black text-center bg-gradient-to-r from-yellow to-green uppercase font-bold text-[12px] px-1.5 pt-[2px] rounded-md">
                  beta
                </span>
              </div>
            </div>
          </Link>
          <div className="flex flex-col lg:flex-row text-[14px] gap-5 md:gap-0 mt-10 lg:mt-0">
            <p className="md:mr-5 text-left">
              Copyright&copy;{new Date().getFullYear()} theSkillClub. All right
              reserved.
            </p>
            <p className="hidden md:visible">|</p>
            <div className="flex flex-col lg:flex-row gap-5 md:ml-5">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
