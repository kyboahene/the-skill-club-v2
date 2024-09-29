import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EllipsisVertical, ExternalLink } from "lucide-react";

//types
import {
  Certificate,
  WorkHistory,
  PersonalProject,
  PersonalEducation,
  ISkill,
} from "@/lib/types/misc";
import { cn } from "@/lib/utils";

// type ProfileOverviewProps = {
//   name?: string;
//   role: string;
//   country: string;
//   imageUrl: string;
//   linkedIn?: string;
//   description: string;
//   skills: {
//     skill: string;
//     verified?: boolean;
//     id?: string;
//   }[];
//   gitPortWebsite?: string;
//   workHistory: WorkHistory[];
//   projects: PersonalProject[];
//   certificates: Certificate[];
//   education: PersonalEducation[];
//   mode?: ["Contract" | "Internship" | "Entry Level"];
// };

const ProfileOverview = () =>
  //     {
  //   mode,
  //   name,
  //   role,
  //   skills,
  //   country,
  //   linkedIn,
  //   imageUrl,
  //   projects,
  //   education,
  //   workHistory,
  //   description,
  //   certificates,
  //   gitPortWebsite,
  // }: ProfileOverviewProps
  {
    const role = "";
    const name = "Yaw Kyei Boahene";
    const mode = "Remote";
    const skills: ISkill[] = [];
    const country = "Ghana";
    const linkedIn = "";
    const imageUrl = "/images/placeholder.jpg";
    const projects: PersonalProject[] = [];
    const education: PersonalEducation[] = [];
    const workHistory: WorkHistory[] = [];
    const description = "";
    const certificates: Certificate[] = [];
    const gitPortWebsite = "";

    const colors = ["bg-red-300", "bg-yellow", "bg-green", "bg-blue-300"];

    return (
      <>
        <div>
          <div className="px-6 mt-4 flex justify-end">
            <div className="cursor-pointer">
              <EllipsisVertical />
            </div>
          </div>
          <div className="p-6">
            <div className="lg:flex lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="text-white cursor-pointer relative">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden">
                    <Image
                      alt="profile"
                      layout="fill"
                      objectFit="cover"
                      src={imageUrl ?? `/images/placeholder.jpg`}
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-md">{name}</h1>
                  {role && mode && country && (
                    <span>
                      {role} • {mode} • {country}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`${gitPortWebsite ?? ""}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="#000"
                      d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
                    ></path>
                  </svg>
                </a>
                <a href={linkedIn ?? ""} target="_blank" rel="noreferrer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="#000"
                      d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {skills.length > 0 ? (
              <div className="skills">
                <h3 className="font-medium text-sm mt-4">Skills</h3>
                <div className="flex gap-4 flex-wrap">
                  {skills.map((skill, index) => (
                    <div
                      className="flex gap-1 items-center relative mt-2"
                      key={index}
                    >
                      <p
                        //   className={`${
                        //     colors[index % colors.length]
                        //   } py-1 px-2 text-md rounded-[35px]`}

                        className={cn(
                          "py-1 px-2 text-md rounded-[35px]",
                          colors[index % colors.length]
                        )}
                      >
                        {skill.skill}
                      </p>
                      <div className="group relative">
                        {skill.verified ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span className="p-2 rounded-md text-[0.8em] bg-black text-white absolute z-50 -top-11 -left-5 before:bg-black before:p-1 before:absolute before:right-1/2 before:-bottom-1 before:rotate-45 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-[0.2s]">
                              Verified
                            </span>
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>

                            <span className="p-2 rounded-md text-[0.8em] w-[16em] bg-black text-white absolute z-50 -top-[5em] -left-[7em] before:bg-black before:p-1 before:absolute before:right-1/2 before:-bottom-1 before:rotate-45 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-[0.2s]">
                              Click
                              <Link
                                href={`/talent-dashboard/assessments/${skill.skill}/${skill.id}`}
                              >
                                <a className="underline px-1 font-bold">here</a>
                              </Link>
                              to take assessment to be verified.
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="about mt-8">
              <h3 className="font-medium text-sm">About Me</h3>
              <p>{description}</p>
            </div>

            {education && education.length > 0 ? (
              <div className="education mt-10">
                <h3 className="font-medium text-sm">Education</h3>
                {education.map((edu, index) => (
                  <div className="flex gap-10 mb-4" key={index}>
                    <div className="flex-[2]">
                      <span className="text-sm">
                        {edu.from} -{" "}
                        {edu.to ? edu.to : edu.toDate ? "To Date" : ""}
                      </span>
                    </div>
                    <p>-</p>
                    <div className="flex-[3]">
                      <h3 className="font-bold">
                        {edu.degree}&apos;s, {edu.course}
                      </h3>
                      <div className="flex">
                        <span className="text-sm">{edu.school}</span>
                        <ExternalLink />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            {workHistory && workHistory.length > 0 ? (
              <div className="assessment mt-10">
                <h3 className="font-medium text-sm">Experience</h3>
                {workHistory.map((wH, index) => (
                  <div className="flex gap-10 mb-4" key={index}>
                    <div className="flex-[2]">
                      <span className="text-sm">
                        {wH.from} - {wH.to ? wH.to : wH.toDate ? "To Date" : ""}
                      </span>
                    </div>
                    <p>-</p>
                    <div className="flex-[3]">
                      <h3 className="font-bold">{wH.jobTitle}</h3>
                      <div className="flex">
                        <span className="text-sm">{wH.company}</span>
                        <ExternalLink />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            {projects && projects.length > 0 ? (
              <div className="assessment mt-10">
                <h3 className="font-medium text-sm">Projects Embarked On</h3>
                {projects.map((pro, index) => (
                  <div className="mb-5" key={index}>
                    <div className="flex gap-10">
                      <div className="flex-[2]">
                        <span className="text-sm">{pro.year}</span>
                      </div>
                      <p>-</p>
                      <div className="flex-[3]">
                        <a
                          href={`${pro.projectLink}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex">
                            <h3 className="font-bold">{pro.projectTitle}</h3>
                            <ExternalLink />
                          </div>
                        </a>{" "}
                        <p>{pro.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            {certificates && certificates.length > 0 ? (
              <div className="assessment mt-10">
                <h3 className="font-medium text-sm">Certificates</h3>
                {certificates.map((cert, index) => (
                  <div className="mb-5" key={index}>
                    <div className="flex gap-10">
                      <div className="flex-[2]">
                        <span className="text-sm">
                          {cert.month} {cert.year}
                        </span>
                      </div>
                      <p>-</p>
                      <div className="flex-[3]">
                        <div className="flex">
                          <h3 className="font-bold">{cert.title}</h3>
                        </div>
                        <p>{cert.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            <div className="mt-10">
              <h3 className="font-medium text-sm">Ideal Opportunity</h3>
              <div className="mt-5">
                <h6 className="font-bold text-sm">Desired mode</h6>
                <p className="bg-white px-2 rounded-md inline mt-5">{mode}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default ProfileOverview;
