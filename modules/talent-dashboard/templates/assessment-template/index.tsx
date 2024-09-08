"use client";

import Link from "next/link";
import Lottie from "react-lottie";
import { ChevronRight } from "lucide-react";
import React, { useMemo, useState } from "react";

//store
import { ISkill } from "@/lib/types";

// lottie
import empty from "@/lottie/empty-box.json";
import useDebounce from "@/lib/hooks/use-debounce";
import { reactLottieConfig } from "@/lib/utils/react-lottie-config";
import Button from "@/modules/shared/components/button";
import { cn } from "@/lib/utils";

// utils

// hooks

//components

//icons

const TalentAssessmentTemplate = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 1000);

  //   const filteredItems = useMemo(() => {
  //     if (!query) return authenticatedTalent?.skills ?? [];
  //     const res = authenticatedTalent?.skills?.filter((skill: ISkill) =>
  //       skill.skill
  //         .toLowerCase()
  //         .replace(/\s+/g, "")
  //         .includes(query.toLowerCase().replace(/\s+/g, ""))
  //     );
  //     return res ?? [];

  //     return []
  //   }, [debouncedValue]);
  const filteredItems: { id: string; skill: string; verified: boolean }[] = [];

  return (
    <section className="mt-16 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
        <h1 className="md:text-xl header-font font-bold">Skills</h1>
        <input
          type="search"
          className="rounded-[15px] px-6 py-4 w-full md:w-[350px]"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <div className="bg-white rounded-[15px] py-10 px-6 md:px-12 flex flex-col gap-6">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f0f5f3] font-bold">
              <tr>
                <th
                  scope="col"
                  align="left"
                  className="p-3 rounded-tl-[15px] rounded-bl-[15px]"
                >
                  Skill
                </th>
                <th
                  scope="col"
                  className="rounded-tr-[15px] rounded-br-[15px]"
                ></th>
              </tr>
            </thead>
            <tbody className="border-none outline-none">
              {filteredItems && filteredItems.length === 0 ? (
                <tr className="relative cursor-default select-none text-gray-700">
                  {query ? (
                    <td className="text-xl py-6 text-center">
                      No skill found.
                    </td>
                  ) : (
                    <td>
                      <Lottie
                        width={300}
                        height={300}
                        options={reactLottieConfig(empty)}
                      />
                      <p className="text-center">No skill(s) selected yet.</p>
                      <div className="my-3 flex justify-center items-center">
                        <Button text="Add Skill" link="/dashboard/profile" />
                      </div>
                    </td>
                  )}
                </tr>
              ) : (
                filteredItems?.map((skill, index) => {
                  const isLast = filteredItems.length - 1 === index;

                  return !skill.verified ? (
                    <tr
                      key={skill.id}
                      className={cn("", {
                        "border-b border-[#f0f5f3] pb-2": !isLast,
                      })}
                    >
                      <td className="p-3">{skill.skill}</td>
                      <td scope="col" align="right">
                        <Link
                          href={`/talent-dashboard/assessments/${skill.skill}/${skill.id}`}
                        >
                          <button className="p-3 flex items-center gap-2 hover:underline cursor-pointer">
                            Take quiz
                            <ChevronRight />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ) : null;
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TalentAssessmentTemplate;
