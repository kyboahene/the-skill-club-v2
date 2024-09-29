/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

// lib
import { SkillWithResourceType } from "@/lib/types/skill";

type SkillCardProps = {
  count: number;
  skill: SkillWithResourceType;
};

const SkillCard = ({ skill, count }: SkillCardProps) => {
  return (
    <Link href={`/resources/${skill.id}`} key={skill.id}>
      <div className="bg-white cursor-pointer hover:border-amber-100 hover:border-2 rounded-[5px] py-8 px-20  flex justify-center">
        <div>
          <div className="flex justify-center">
            <div className="relative h-20 w-20">
              <Image
                fill
                objectFit="cover"
                alt="no image here"
                src={skill.icon ?? "/images/not-available.png"}
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold">{skill.name}</h1>
            <div className="mt-6">
              <p className="text-sm">{count} resources</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
