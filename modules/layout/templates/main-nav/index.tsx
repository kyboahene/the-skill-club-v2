/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";

// utils
import { cn } from "../../../../lib/utils";

// components
import MobileNav from "../../components/mobile-nav";

const Navbar = () => {
  const [isTop, setIsTop] = useState(false);
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== "undefined") {
    function changeNavbarColor() {
      if (window.scrollY === 0) {
        setIsTop(true);
        return;
      }

      setIsTop(false);
    }

    window.addEventListener("scroll", changeNavbarColor);
  }

  useEffect(() => {
    setIsTop(true);
  }, []);

  function handleHamburgerClick(active = false) {
    setIsActive(active);
  }
  return (
    <header>
      <div
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
                  <img
                    src="/theskillclub-black.svg"
                    alt="the skill club"
                    className="h-[2em]"
                  />
                  <span className="text-black text-center bg-gradient-to-r from-yellow to-green uppercase font-bold text-[12px] px-1.5 pt-[2px] rounded-md">
                    beta
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden lg:flex items-center text-sm font-medium gap-12">
              <Link href="/company/auth/sign-up">Hire Talent</Link>
              <Link href="/contact-us">Contact Us</Link>

              <Link href="/community">Community</Link>
              <Link href="/resources">Resources</Link>
            </nav>
            <Link
              href="/auth/login"
              className="text-black px-6 py-1 bg-gradient-to-r from-yellow to-green rounded-[35px]"
            >
              log In
            </Link>
          </div>
          {isActive ? <MobileNav /> : ""}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
