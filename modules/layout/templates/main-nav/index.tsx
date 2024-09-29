"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// utils
import { cn } from "@/lib/utils";

// components
import MobileNav from "../../components/mobile-nav";
import HeaderLinks from "../../components/header-links";
import HeaderActions from "../../components/header-actions";

const Navbar = () => {
  const [isTop, setIsTop] = useState(false);
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== "undefined") {
    const changeNavbarColor = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        return;
      }

      setIsTop(false);
    };

    window.addEventListener("scroll", changeNavbarColor);
  }

  useEffect(() => {
    setIsTop(true);
  }, []);

  function handleHamburgerClick(active = false) {
    setIsActive(active);
  }

  return (
    <header
      className={cn(
        "px-4 lg:px-0 w-full top-0 fixed z-[100] transform transition-all duration-[0.5s] py-6"
      )}
    >
      <div
        className={cn(
          "relative container mx-auto md:w-5/6 transform transition-all duration-[0.5s] px-4 py-2 rounded-[35px] shadow-lg",
          {
            "bg-white text-black": isTop,
            "bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80": !isTop,
          }
        )}
      >
        <div className="flex justify-between gap-[5px] text-[18px] items-center">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className={cn(
                "flex lg:hidden relative w-5 h-6 justify-center items-center rounded-full",
                {
                  "is-open": isActive,
                }
              )}
              data-toggle="offcanvas"
              id="hamburger"
              onClick={() => handleHamburgerClick(!isActive)}
            >
              <span
                className={cn(
                  "absolute h-[2px] w-full left-0 transform transition-all duration-500 bg-[#7a7a81] top-1",
                  {
                    "-rotate-45 -translate-x-[4px] translate-y-[6px]": isActive,
                  }
                )}
              ></span>
              <span
                className={cn(
                  "absolute h-[2px] w-full left-0 transform transition-all duration-500 bg-[#7a7a81]",
                  {
                    "opacity-0": isActive,
                  }
                )}
              ></span>
              <span
                className={cn(
                  "absolute h-[2px] w-full left-0 transform transition-all duration-500 bg-[#7a7a81] bottom-1",
                  {
                    "rotate-45 -translate-x-1 -translate-y-2": isActive,
                  }
                )}
              ></span>
            </button>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/theskillclub-black.svg"
                  alt="the skill club"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-black text-center bg-gradient-to-r from-yellow to-green uppercase font-bold text-[12px] px-1.5 pt-[2px] rounded-md">
                  beta
                </span>
              </div>
            </Link>
          </div>
          <HeaderLinks />
          <HeaderActions />
        </div>
        {isActive ? <MobileNav /> : ""}
      </div>
    </header>
  );
};

export default Navbar;
