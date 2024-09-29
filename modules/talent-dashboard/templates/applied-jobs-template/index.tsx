import React from "react";

import JobCard from "../../components/job-card";

// lib
import { ApplicationWithDetails } from "@/lib/types/misc";

const AppliedJobsTemplate = () => {
  const data: ApplicationWithDetails[] = [];

  return (
    <section className="my-12 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="header-font font-bold text-2xl">Applied Jobs</h1>
      </div>

      <div className="flex flex-col gap-4">
        {!data ? (
          <></>
        ) : data.length ? (
          data.map((application) => (
            <JobCard job={application} key={application.id} />
          ))
        ) : (
          <div>
            <h1>No applied jobs yet</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppliedJobsTemplate;
