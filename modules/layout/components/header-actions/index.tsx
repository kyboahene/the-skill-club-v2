import React from "react";
import Link from "next/link";

// import { useCurrentUser } from "@/lib/hooks/use-current-user";
import Button from "@/modules/shared/components/custom-button";

const HeaderActions = () => {
  // const user = await useCurrentUser();
  const user = false;

  return user ? (
    <Button link="/dashboard" text="Dashboard" />
  ) : (
    <Link
      href="/auth/login"
      className="text-black px-6 py-1 bg-gradient-to-r from-yellow to-green rounded-[35px]"
    >
      log In
    </Link>
  );
};

export default HeaderActions;
