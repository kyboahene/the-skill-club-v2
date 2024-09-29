"use client";

import React, { useState } from "react";
import { ExternalLink, Pen, Trash } from "lucide-react";

// lib
import { PersonalEducation } from "@/lib/types/misc";
import { EducationModal } from "../modals/education";

type ResumeEducationProps = {
  education?: PersonalEducation[];
};

const ResumeEducation = ({ education }: ResumeEducationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white p-6 rounded-[15px] mt-5">
      <h1 className="header-font font-bold text-md pb-2">Education</h1>
      {education && education.length > 0
        ? education.map((edu, index) => (
            <div className="flex justify-between mb-4 text-sm" key={index}>
              <div>
                <h3 className="font-bold">
                  {edu.degree}&apos;s, {edu.course}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <span className="text-sm">{edu.school}</span>
                    <ExternalLink />
                  </div>
                  <span>|</span>
                  <span className="text-sm">
                    {edu.from} - {edu.to ? edu.to : edu.toDate ? "To Date" : ""}
                  </span>
                </div>
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

      <EducationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default ResumeEducation;
