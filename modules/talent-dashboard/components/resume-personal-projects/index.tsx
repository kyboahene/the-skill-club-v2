"use client";

import React, { useState } from "react";
import { ExternalLink, Pen, Trash } from "lucide-react";

import { PersonalProject } from "@/lib/types/misc";
import { PersonalProjects } from "../modals/personal-projects";

type ResumePersonalProjectsProps = {
  projects?: PersonalProject[];
};

const ResumePersonalProjects = ({ projects }: ResumePersonalProjectsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-[15px] mt-5">
      <h1 className="header-font font-bold text-md mb-3">Personal Projects</h1>
      <div>
        {projects && projects.length > 0
          ? projects.map((pro, index) => (
              <div className="flex justify-between mb-6 text-sm" key={index}>
                <div className="flex gap-4">
                  <span className="text-sm">{pro.year}</span>
                  <p>-</p>
                  <div>
                    <a
                      href={`${pro.projectLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex">
                        <h3 className="font-bold">{pro.projectTitle}</h3>
                        <ExternalLink />
                      </div>
                    </a>

                    <p>{pro.description}</p>
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
        <PersonalProjects isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default ResumePersonalProjects;
