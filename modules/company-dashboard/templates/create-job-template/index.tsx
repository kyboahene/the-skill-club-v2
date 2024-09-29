import React from "react";

// shared
import CreateJobForm from "../../components/create-job-form";

const CompanyCreateJobsTemplate = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col gap-8 text-sm">
        <h1 className="header-font font-bold text-2xl">Post a New Job</h1>
        <CreateJobForm />
      </div>
    </section>
  );
};

export default CompanyCreateJobsTemplate;
