import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// lottie
import empty from "@/lottie/empty.json";

import { ApplicationWithDetails } from "@/lib/types/misc";

// modules
import LottieAnimation from "@/modules/shared/components/lottie-animation";

type AppliedJobsProps = {
  appliedJobs?: ApplicationWithDetails[];
};

const AppliedJobs = ({ appliedJobs }: AppliedJobsProps) => {
  return (
    <div className="flex-[2] bg-white p-6 rounded-[15px] flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <h1 className="header-font">Applied Jobs</h1>
        </div>
      </div>
      {appliedJobs && appliedJobs?.length > 0 ? (
        <div>
          {appliedJobs?.map((job, index) => (
            <Link
              href={`/talent-dashboard/jobs/${job.jobDetails.id}`}
              key={index}
            >
              <div
                className={`w-full group cursor-pointer flex justify-between items-center py-2 ${
                  appliedJobs.length - 1 !== index ? "border-b" : ""
                }`}
              >
                <div>
                  <h1 className="font-bold text-sm group-hover:underline">
                    {job.jobDetails.jobTitle}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    {job.jobDetails.jobType} . {job.jobDetails.workLocation}
                  </p>
                </div>
                <ChevronRight color="text-black" fontSize={4} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center w-full">
          <div>
            <div className="h-[20em] w-[20em]">
              <LottieAnimation animationData={empty} />
            </div>
            <div className="text-center">
              <p>You have not applied any job yet.</p>
              <div className="flex justify-center mt-2">
                <Link href="/dashboard/jobs">
                  <div className="group lg:cursor-pointer flex items-center gap-2 px-4 py-2 text-[14px] rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e]">
                    <span className="translate-x-4 group-hover:-translate-x-0 transition-transform duration-150">
                      Browse Jobs
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 translate-x-8 opacity-0 transition-transform duration-150 group-hover:-translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
