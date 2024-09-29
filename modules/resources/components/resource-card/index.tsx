import React from "react";
import { Resource, ResourceType } from "@prisma/client";
import { ChevronRight, FileText, Video } from "lucide-react";

// lib
import useMediaQuery from "@/lib/hooks/use-media-query";

type ResourceCardProps = {
  resource: Resource;
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="bg-white cursor-pointer hover:border-amber-100 hover:border-2 p-6 md:p-10 flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center rounded-[5px]">
      <div className="flex items-center md:gap-3">
        <div>
          {isAboveMediumScreens ? (
            resource.type === ResourceType.VIDEO ? (
              <Video className="h-6 w-6" />
            ) : (
              <FileText className="h-6 w-6" />
            )
          ) : null}
        </div>
        <div>
          <h1 className="font-bold">{resource.title}</h1>
          <p>{resource.description}</p>
        </div>
      </div>
      <div>
        <ChevronRight className="h-6 w-6" />
      </div>
    </div>
  );
};

export default ResourceCard;
