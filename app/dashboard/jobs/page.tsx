import React from "react";
import { Metadata } from "next";

import JobsTemplate from "@/modules/talent-dashboard/templates/jobs-template";

export const metadata: Metadata = {
  title: "Jobs",
};

const Jobs = () => {
  return <JobsTemplate />;
};

export default Jobs;
