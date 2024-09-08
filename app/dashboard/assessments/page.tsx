import TalentAssessmentTemplate from "@/modules/talent-dashboard/templates/assessment-template";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Assessments",
};

const Assessments = () => {
  return <TalentAssessmentTemplate />;
};

export default Assessments;
