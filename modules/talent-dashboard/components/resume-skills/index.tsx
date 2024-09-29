"use client";

import { Pen, Pencil } from "lucide-react";
import React, { useState } from "react";

import AddSkills from "../add-skills";

type ResumeSkillsProps = {
  skills?: { skill: string; verified: boolean; id?: string }[];
};

const ResumeSkills = ({ skills }: ResumeSkillsProps) => {
  const [edit, setEdit] = useState(false);

  return (
    <section className="bg-white p-6 rounded-[15px]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h1 className="header-font font-bold text-md pb-2">
            Skills
            <span className="text-sm text-red-500 ml-2 md:ml-3">
              (Please complete the assessment on the skill you add)
            </span>
          </h1>
        </div>
        {edit ? (
          <div className="flex gap-3">
            <button
              type="reset"
              className="inline-flex justify-center rounded-[35px] border-2 px-4 py-2 text-sm font-medium border-black"
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
            <button
              className="justify-center rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e] px-6 text-sm font-medium"
              // onClick={() => addSkills()}
            >
              {/* {loading ? <span className="spinner"> </span> : "Save"} */}
              save
            </button>
          </div>
        ) : (
          <p className="cursor-pointer" onClick={() => setEdit(true)}>
            <Pencil className="h-4 w-4" />
          </p>
        )}
      </div>
      {edit ? (
        <AddSkills skills={skills} />
      ) : (
        <div className="flex flex-wrap gap-3 text-sm">
          {skills &&
            skills.map((skill, index) => (
              <p
                className="inline p-3 shadow-sm bg-[#f4f7f6] rounded-[35px]"
                key={index}
              >
                {skill?.skill}
              </p>
            ))}
        </div>
      )}
    </section>
  );
};

export default ResumeSkills;
