import React from "react";

import ResumeSkills from "../../components/resume-skills";
import ResumeEducation from "../../components/resume-education";
import ResumeCertificate from "../../components/resume-certificate";
import ResumeWorkHistory from "../../components/resume-work-history";
import ResumePersonalProjects from "../../components/resume-personal-projects";

const ProfileResumeTemplate = () => {
  return (
    <section className="resume py-6">
      <ResumeSkills />
      <ResumeWorkHistory />
      <ResumeEducation />
      <ResumePersonalProjects />
      <ResumeCertificate />
    </section>
  );
};

export default ProfileResumeTemplate;
