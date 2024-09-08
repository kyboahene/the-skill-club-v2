"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// constant
import { talentDashboardNavigation } from "@/constants";

const TalentDashboardSidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="w-56 flex-shrink-0 overflow-y-auto z-50 bg-white shadow-lg">
      <div className="p-6 h-full flex flex-col">
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
        <nav className="flex-1 mt-4">
          <ul className="space-y-3">
            {talentDashboardNavigation.map((nav, index) => {
              const active = pathName === nav.link;
              return (
                <li key={index}>
                  <Link href={nav.link}>
                    <div
                      className={cn(
                        "flex items-center gap-4 pl-5 py-2 hover:bg-gradient-to-r hover:from-yellow hover:to-green rounded-[35px] group cursor-pointer",
                        {
                          "bg-gradient-to-r from-yellow to-green": active,
                        }
                      )}
                    >
                      <div className="text-2xl text-gray-600">
                        {<nav.svg />}
                      </div>
                      <span className="text-sm text-gray-800 font-semibold">
                        {nav.menuItem}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto space-y-4">
          <Link href="/dashboard/settings">
            <div className="flex items-center gap-4 pl-5 py-2 hover:bg-gradient-to-r hover:from-yellow hover:to-green rounded-[35px] group cursor-pointer">
              <div className="text-2xl text-gray-600">
                <Settings />
              </div>
              <span className="text-sm text-gray-800 font-semibold">
                Settings
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4 pl-5 py-2 hover:bg-gradient-to-r hover:from-yellow hover:to-green rounded-[35px] group cursor-pointer">
            <div className="text-2xl text-gray-600">
              <User />
            </div>
            <span className="text-sm text-gray-800 font-semibold">Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TalentDashboardSidebar;
