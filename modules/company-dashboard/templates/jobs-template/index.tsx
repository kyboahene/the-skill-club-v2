import React from "react";
import Link from "next/link";
import { EyeIcon, PenBoxIcon, Trash } from "lucide-react";

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
import { Capitalize } from "@/lib/utils/capitalize";

// shared
import Button from "@/modules/shared/components/custom-button";
import LottieAnimation from "@/modules/shared/components/lottie-animation";

import empty from "@/lottie/empty.json";

const CompanyJobsPageTemplate = () => {
  const data: any[] = [];

  return (
    <section className="flex flex-col gap-8 mt-16">
      <div className="flex items-center justify-between">
        <h1 className="header-font font-bold text-2xl">Jobs</h1>

        <Button text="Post Job" link="company/jobs/create" />
      </div>

      <div className="bg-white rounded-[15px] py-10 px-6 md:px-12">
        <div className=" max-sm:max-w-[300px] overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader className="bg-[#f0f5f3] p-3">
              <TableRow className="!border-b-0">
                <TableHead className="rounded-tl-[15px] rounded-bl-[15px]">
                  Title
                </TableHead>
                <TableHead>Created On</TableHead>
                <TableHead>Work Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="rounded-tr-[15px] rounded-br-[15px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data !== undefined && data.length > 0 ? (
                data?.map((job) => {
                  return (
                    <TableRow key={job.id}>
                      <TableCell className="overflow-hidden truncate">
                        <Link href={`/talent-dashboard/jobs/${job.id}`}>
                          {job.jobTitle}
                        </Link>
                      </TableCell>
                      <TableCell className="overflow-hidden truncate">
                        {job.timestamp.toDate().toDateString()}
                      </TableCell>
                      <TableCell className="overflow-hidden truncate">
                        {job.workLocation}
                      </TableCell>
                      <TableCell className="overflow-hidden truncate">
                        {Capitalize(job.status)}
                      </TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Link href={`/company/jobs/${job.id}`}>
                          <EyeIcon size={20} className="cursor-pointer" />
                        </Link>
                        <Link href={`/company/jobs/${job.id}/edit`}>
                          <PenBoxIcon
                            size={17}
                            color="green"
                            className="cursor-pointer"
                          />
                        </Link>
                        <span
                          className="cursor-pointer"
                          // onClick={() => handleDelete(job)}
                        >
                          <Trash />
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={5}>
                    <div className="h-[20em] w-[20em]">
                      <LottieAnimation animationData={empty} />
                    </div>
                    <p className="text-center">
                      You have not posted any job yet.
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default CompanyJobsPageTemplate;
