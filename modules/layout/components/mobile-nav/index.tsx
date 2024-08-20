import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <section className="absolute top-20 left-0 bg-white shadow-md w-2/3 px-6 py-4 rounded-[15px]">
      <nav className="flex flex-col text-sm font-medium gap-6">
        <Link href="/company/auth/sign-up">Hire Talent</Link>
        <Link href="/contact-us">Contact Us</Link>

        <Link href="/community">Community</Link>
        <Link href="/resources">Resources</Link>
      </nav>
    </section>
  );
};

export default MobileNav;
