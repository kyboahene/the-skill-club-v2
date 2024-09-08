"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlignRight, Settings, User } from "lucide-react";

import { cn } from "@/lib/utils";

// shared
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/modules/shared/components/sheet";

// constant
import { talentDashboardNavigation } from "@/constants";

const TalentDashboardMobileNav = () => {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="cursor-pointer" asChild>
          <button className="z-50 fixed top-6 right-6 inline-flex items-center peer justify-center rounded-md lg:hidden p-2 bg-black text-white focus:outline-none ring-2 focus:ring-inset ring-white group overflow-y-auto">
            <div className="block h-6 w-6" aria-hidden="true">
              <AlignRight />
            </div>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white min-h-screen">
          <Link href="/dashboard">
            <div className="flex items-center gap-2 pl-5 border-b border-gray-100">
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

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 text-black overflow-y-auto">
                <div className=" my-4 border-b border-gray-100 pb-4">
                  {talentDashboardNavigation.map((nav, index) => {
                    const active = pathName === nav.link;

                    return (
                      <Link href={nav.link} key={index}>
                        <div
                          className={cn(
                            "flex mb-5 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-r hover:from-yellow hover:to-green p-2 rounded-[35px] group cursor-pointer m-auto transition-all duration-500",
                            {
                              "bg-gradient-to-r from-yellow to-green": active,
                            }
                          )}
                        >
                          <div className={`${!active ? "text-gray-600" : ""}`}>
                            {<nav.svg />}
                          </div>
                          <h3
                            className={cn("text-sm font-semibold", {
                              "text-gray-800": active,
                            })}
                          >
                            {nav.menuItem}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {/* setting  */}
                <div className=" border-b border-gray-100 pb-4">
                  <Link href="/dashboard/settings">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-to-r hover:from-yellow hover:to-green p-2 rounded-[35px] group cursor-pointer m-auto">
                      <div className="text-2xl text-gray-600">
                        <Settings />
                      </div>
                      <h3 className="text-sm text-gray-800 font-semibold ">
                        Settings
                      </h3>
                    </div>
                  </Link>
                </div>

                {/* logout */}
                <div className=" my-4">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-gradient-to-r hover:from-yellow hover:to-green p-2 rounded-[35px] group cursor-pointer m-auto">
                    <div className="text-2xl text-gray-600 group-hover:text-black">
                      <User />
                    </div>
                    <h3 className="text-sm text-gray-800 group-hover:text-black font-semibold">
                      Logout
                    </h3>
                  </div>
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default TalentDashboardMobileNav;
