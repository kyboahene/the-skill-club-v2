import React from "react";
import Link from "next/link";
import Image from "next/image";

const TalentDashboardTopNav = () => {
  return (
    <div className="bg-[#f0f5f3] border flex justify-between md:justify-end fixed top-0 left-0 w-full z-10 px-6 md:px-16 py-1 md:py-8">
      <Link href="/dashboard">
        <div className="md:hidden flex items-center gap-2 border-b border-gray-100">
          <div className="h-20 w-20 relative">
            <Image
              src="/theskillclub-black.svg"
              layout="fill"
              priority={true}
              objectFit="contain"
              alt="the skill club"
            />
          </div>
          <span className="text-black bg-gradient-to-r from-yellow to-green uppercase text-[10px] md:text-[12px] pt-[0.32em] px-[0.7em] rounded-[8px]">
            beta
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-4 max-sm:pr-16">
        <Link
          href="https://t.me/+cNKWdbKKkEQ2MGY0"
          target="_blank"
          className="font-bold hidden md:block"
          rel="noreferrer"
        >
          <div className="w-full group lg:cursor-pointer flex items-center gap-2 px-4 py-2 text-[14px] rounded-[35px] bg-gradient-to-r from-yellow to-green">
            <span className="translate-x-4 group-hover:-translate-x-0 transition-transform duration-150">
              Join Community
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 translate-x-8 opacity-0 transition-transform duration-150 group-hover:-translate-x-0 group-hover:opacity-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TalentDashboardTopNav;
