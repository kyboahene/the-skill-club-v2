"use client";

import React from "react";

// component
import JobFilters from "../../components/job-filters";

const JobsTemplate = () => {
  return (
    <section className="my-12 grid grid-cols-4 gap-3">
      <div className="col-span-1 bg-white rounded-[15px] border-r flex flex-col gap-4">
        <div className="p-4 border-b">
          <h1 className="header-font font-bold text-xl">Filters</h1>
        </div>

        <div className="px-4">
          <JobFilters />
        </div>
      </div>
      <div className="col-span-3 p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h1 className="header-font font-bold text-xl">Jobs</h1>
            <p className="text-gray-500">1,234</p>
          </div>
          <input
            type="search"
            className="rounded-[10px] border px-6 py-2 w-full md:w-[400px]"
            placeholder="Search"
            required
          />
        </div>

        <div className="flex flex-col gap-4">{/* <JobCard job={{}} /> */}</div>
      </div>
    </section>
  );
};

export default JobsTemplate;
