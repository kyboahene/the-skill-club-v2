import React from "react";
import Link from "next/link";

// constant
import { mainNavNavigation } from "@/constants";

const MobileNav = () => {
  return (
    <section className="absolute top-20 left-0 bg-white shadow-md w-2/3 px-6 py-4 rounded-[15px]">
      <nav className="flex flex-col text-sm font-medium gap-6">
        {mainNavNavigation.map((nav, index) => (
          <Link key={index} href={nav.link}>
            {nav.menuItem}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default MobileNav;
