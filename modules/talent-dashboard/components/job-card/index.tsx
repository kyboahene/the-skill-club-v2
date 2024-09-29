import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { ApplicationWithDetails } from "@/lib/types/misc";
import { reduceZeroToK } from "@/lib/utils/convert-zero-to-K";

type JobCardProps = {
  job: ApplicationWithDetails;
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white p-6 rounded-[15px]">
      <div className="flex justify-between">
        <div className="flex items-start md:items-center gap-4">
          <div className="relative h-12 w-12 max-sm:w-16 rounded-[15px] overflow-hidden border">
            <Image
              // src={job.jobDetails?.companyDetails?.logo}
              src={"/images/logo-placeholder.png"}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <Link href={`/dashboard/jobs/${job.jobId}`}>
              <p className="font-bold cursor-pointer hover:underline">
                {job.jobDetails.jobTitle}
              </p>
            </Link>
            <p>
              {job.jobDetails.company.name} • {job.jobDetails.workLocation} •
              GHS{" "}
              {reduceZeroToK(
                job.jobDetails.minPay ? job.jobDetails.minPay : ""
              )}
              -
              {reduceZeroToK(
                job.jobDetails.maxPay ? job.jobDetails.maxPay : ""
              )}{" "}
              • {dayjs(job.jobDetails.timestamp.toDate()).fromNow()}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          {/* <button
                    className="justify-center rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e] px-6 py-2 text-sm font-medium"
                    onClick={() => handleApply(job)}
                  >
                    Apply
                  </button> */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
