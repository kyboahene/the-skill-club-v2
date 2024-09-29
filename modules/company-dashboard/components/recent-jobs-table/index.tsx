import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/modules/shared/components/table";

import { cn } from "@/lib/utils";
import { Capitalize } from "@/lib/utils/capitalize";

type RecentJobsTableProps = {};

const RecentJobsTable = () => {
  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      status: "Active",
      location: "Tema",
    },
    {
      id: "2",
      title: "Software Engineer",
      status: "Closed",
      location: "Accra",
    },
    {
      id: "3",
      title: "UI/UX Engineer",
      status: "Active",
      location: "Kumasi",
    },
    {
      id: "4",
      title: "Q/A Engineer",
      status: "Active",
      location: "Accra",
    },
  ];

  return (
    <section className="flex-[3] bg-white p-6 rounded-[15px] flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-between">
        <div>
          <h1 className="header-font">Recent Jobs</h1>
        </div>
        <div className="text-right">
          <Link
            href="/company/jobs"
            className="flex justify-center items-center hover:underline"
          >
            see all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="max-sm:max-w-[300px] overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className="bg-[#f0f5f3] p-3 rounded-[15px]">
            <TableRow className="!border-b-0">
              <TableHead className="rounded-tl-[15px] rounded-bl-[15px]">
                Job Title
              </TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="rounded-tr-[15px] rounded-br-[15px]">
                Location
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs !== undefined && jobs.length > 0 ? (
              jobs?.map((job) => {
                return (
                  <TableRow key={job.id}>
                    <TableCell className="overflow-hidden truncate">
                      <Link href={`/talent-dashboard/jobs/${job.id}`}>
                        {job.title}
                      </Link>
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      <div className="relative flex w-full max-sm:hidden">
                        {[1, 2, 3].map((img, index) => (
                          <div key={index} className="relative h-[3em] w-[3em]">
                            <Image
                              src={"/images/login-bg.jpg"}
                              alt="attendees"
                              fill
                              className={cn("rounded-full", {
                                absolute: index > 0,
                              })}
                              style={{ top: 0, left: index * -10 }}
                            />
                          </div>
                        ))}
                        <div className="flex-center absolute left-[90px] size-10 rounded-full bg-ash font-bold">
                          +3
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {Capitalize(job.status)}
                    </TableCell>
                    <TableCell className="overflow-hidden truncate">
                      {job.location}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <p className="text-center">You have not posted job(s) yet.</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default RecentJobsTable;
