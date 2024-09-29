import React from "react";
import { Metadata } from "next";

import CommunityPageTemplate from "@/modules/community";

export const metadata: Metadata = {
  title: "Community",
};

const Community = () => {
  return <CommunityPageTemplate />;
};

export default Community;
