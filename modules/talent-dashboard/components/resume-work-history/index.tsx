"use client";

import React, { useState } from "react";
import { ExternalLink, Pen, Trash } from "lucide-react";

import { WorkHistory } from "@/lib/types/misc";
import { WorkHistoryModal } from "../modals/work-history";

type ResumeWorkHistoryProps = {
  workHistory?: WorkHistory[];
};

const ResumeWorkHistory = ({ workHistory }: ResumeWorkHistoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white p-6 rounded-[15px] mt-5">
      <h1 className="header-font font-bold text-md mb-2">Work History</h1>
      {workHistory && workHistory.length > 0
        ? workHistory.map((wH, index) => (
            <div className="flex justify-between mb-6 text-sm" key={index}>
              <div className="pr-12" key={index}>
                <h3 className="font-bold">{wH.jobTitle}</h3>
                <>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      <span className="text-sm">{wH.company}</span>
                      <ExternalLink />
                    </div>
                    <span>|</span>
                    <span className="text-sm">
                      {wH.from} - {wH.to ? wH.to : wH.toDate ? "To Date" : "d"}
                    </span>
                  </div>
                  <p>{wH.description}</p>
                </>
              </div>
              <div className="flex gap-3">
                <p className="cursor-pointer">
                  <Pen />
                </p>
                <p className="cursor-pointer">
                  <Trash color="#ff0000" />
                </p>
              </div>
            </div>
          ))
        : ""}
      <WorkHistoryModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default ResumeWorkHistory;
