import React from "react";
import Link from "next/link";
import Lottie from "react-lottie";

// lottie
import empty from "@/lottie/empty-box.json";

// shared
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/modules/shared/components/table";

// lib
import { JobDetail } from "@/lib/types";

// utils
import { Capitalize } from "@/lib/utils/capitalize";
import { reactLottieConfig } from "@/lib/utils/react-lottie-config";

type RecommendedJobsProps = {
  recommendedJobs?: JobDetail[];
};

const RecommendedJobs = ({ recommendedJobs }: RecommendedJobsProps) => {
  return (
    <div className="flex-[3] bg-white p-6 rounded-[15px] flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-between">
        <div>
          <h1 className="header-font">Recommended Jobs</h1>
          <p className="text-gray-500">Jobs where you&apos;re top applicant.</p>
        </div>
        <div className="text-right">
          <Link href="/talent-dashboard/settings">
            <a>Change job preferences</a>
          </Link>
        </div>
      </div>
      <div className="max-sm:max-w-[300px] overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className="bg-[#f0f5f3] p-3 rounded-[15px]">
            <TableRow className="!border-b-0">
              <TableHead className="rounded-tl-[15px] rounded-bl-[15px]">
                Title
              </TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Work Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="rounded-tr-[15px] rounded-br-[15px]">
                Posted On
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recommendedJobs !== undefined && recommendedJobs.length > 0 ? (
              recommendedJobs?.map((job, index) => {
                return (
                  <TableRow key={job.id}>
                    <TableCell className="overflow-hidden truncate">
                      <Link href={`/talent-dashboard/jobs/${job.id}`}>
                        {job.jobTitle}
                      </Link>
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {job.company.name}
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {job.workLocation}
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {Capitalize(job.status)}
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {job.timestamp.toDate().toDateString()}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <Lottie
                    width={300}
                    height={300}
                    options={reactLottieConfig(empty)}
                  />
                  <p className="text-center">
                    You have no recommended job(s) yet.
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecommendedJobs;
