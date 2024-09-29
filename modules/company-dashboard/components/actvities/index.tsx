import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Activities = () => {
  return (
    <section className="flex-[3] bg-white p-6 rounded-[15px] flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="header-font font-bold">Activity</h1>
        <div className="text-right">
          <Link
            href="/company/jobs"
            className="hover:underline flex items-center gap-1"
          >
            see all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4">
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
      </div> */}
    </section>
  );
};

export default Activities;
