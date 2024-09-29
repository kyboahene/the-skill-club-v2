/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FileText } from "lucide-react";

// lib
import { Resource } from "@/lib/types/misc";

const ResourceDetails = ({ resources }: { resources: Resource[] }) => {
  return (
    <section className="bg-white rounded-[5px] py-6 px-10 flex flex-col justify-center">
      <div className="flex justify-end">
        <div className="flex items-center">
          <FileText />
          <span> {resources.length}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="h-20 w-20 relative">
            <Image
              src={resources[0].skill.icon ?? "/images/not-available.png"}
              alt="resource"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">{resources[0].skill.name}</h1>
          <div className="mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDetails;
