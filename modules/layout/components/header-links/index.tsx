import React from "react";
import Link from "next/link";

import { mainNavNavigation } from "@/constants";

const HeaderLinks = () => {
  return (
    <nav className="hidden lg:flex items-center text-sm font-medium gap-12">
      {mainNavNavigation.map((nav, index) => (
        <Link key={index} href={nav.link}>
          {nav.menuItem}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderLinks;
