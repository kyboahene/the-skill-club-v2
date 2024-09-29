import React from "react";
import { Metadata } from "next";

// templates
import AppliedJobsTemplate from "@/modules/talent-dashboard/templates/applied-jobs-template";

export const metadata: Metadata = {
  title: "Applied Jobs",
};

const AppliedJobs = () => {
  return <AppliedJobsTemplate />;
};

export default AppliedJobs;
