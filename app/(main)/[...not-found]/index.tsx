import React from "react";
import { Metadata } from "next";

import NotFoundPageTemplate from "@/modules/not-found";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page is not found",
};

export default function NotFound() {
  return <NotFoundPageTemplate />;
}
