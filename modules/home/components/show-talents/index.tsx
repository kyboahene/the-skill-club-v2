"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// types
import { CustomUser } from "../../../../lib/types";

// utils
import { Capitalize } from "../../../../utils/capitalize";
import { showCustomErrorMessage } from "../../../../utils/alerts";

// shared

// firebase
import { queryStudentsByRole } from "../../../../lib/firebase/firestore/talents";
import { Skeleton } from "@/modules/shared/components/skeleton";

const ShowTalents = () => {
  const [loading, setLoading] = useState(false);
  const [talents, setTalents] = useState<CustomUser[]>();
  const [selected, setSelected] = useState("Mobile Developer");

  const skills = [
    "Web Developer",
    "Mobile Developer",
    "Product Designer",
    "Graphic Designer",
  ];

  useEffect(() => {
    function getStudents() {
      const _selected =
        selected === "Product Designer" ? "Product Designer (UI/UX)" : selected;
      setLoading(true);
      queryStudentsByRole(`${_selected}`)
        .then((docs: any) => {
          const _docs = docs.slice(docs.length - 3);
          setTalents(_docs);
        })
        .catch((error) => {
          showCustomErrorMessage("Error", `${error}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    getStudents();
  }, [selected]);

  return (
    <>
      <section className="bg-ash">
        <div className="container mx-auto md:w-5/6 pt-[7em] pb-[9em] md:px-[4em]">
          <h1 className="header-font text-center text-[30px] md:text-[50px] font-normal">
            Meet Talent in Our Network
          </h1>
          <div className="flex overflow-auto justify-center mt-6 md:my-6 roles-list">
            <div className="flex items-center gap-6 md:gap-12 pl-[25em] md:pl-[20em] lg:pl-0">
              {skills &&
                skills.map((skill: string, index) => (
                  <p
                    className={`md:text-[18px] w-[10em] md:text-center cursor-pointer hover:border-b-[1px] hover:border-gray-500 pb-2`}
                    key={index}
                    style={{
                      borderBottom: `${
                        selected === skill ? "1px gray solid" : "none"
                      }`,
                    }}
                    onClick={() => setSelected(skill)}
                  >
                    {skill}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex justify-center items-center md:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {!loading
                ? talents &&
                  talents.map((talent, index) => (
                    <div
                      className="bg-white h-[20.5em] w-[18em] mx-auto md:mx-0 rounded-[5px]"
                      key={index}
                    >
                      <div className="image-container relative h-[13em] w-full overflow-hidden inline-block">
                        <div className="h-full w-full border object-cover">
                          <Image
                            src={`${
                              talent.profile
                                ? talent.profile
                                : "/images/placeholder.jpg"
                            }`}
                            alt="contract"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="py-[1.4em] text-center">
                        <div className="mb-6">
                          <h4 className="font-bold text-md">
                            {talent && talent.name && Capitalize(talent.name)}
                          </h4>
                        </div>
                        <Link href={`/talents/${talent.id}`}>
                          <div className="bg-black text-white p-2 cursor-pointer">
                            View{" "}
                            {`${
                              talent &&
                              talent.name &&
                              Capitalize(talent.name?.split(" ")[0])
                            }`}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                : [1, 2, 3].map((i, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <Skeleton className="h-[17.5em] w-[18em] rounded-[5px]" />
                      <Skeleton className="h-[2em] w-[18em] rounded-[5px]" />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTalents;
