import React from "react";
import { useRouter } from "next/router";

// components
import Header from "../../components/header";
import ResourceCard from "../../components/resource-card";
import ResourceDetails from "../../components/resource-details";

// module
import Footer from "@/modules/layout/templates/footer";
import { Skeleton } from "@/modules/shared/components/skeleton";

const ResourceDetailTemplate = () => {
  const isLoading = false;
  const router = useRouter();

  return (
    <div className="bg-[#f4f7f6] h-full">
      <Header />
      <div className="pb-[5em] md:px-6 lg:px-[18em]">
        {isLoading ? (
          <div className="flex gap-4 my-12">
            <Skeleton className="flex-1 h-44 w-full" />
            <div className="flex-[3] flex flex-col gap-3">
              <Skeleton className="h-44 w-full" />
              <Skeleton className="h-44 w-full" />
              <Skeleton className="h-44 w-full" />
            </div>
          </div>
        ) : resources && resources?.length > 0 ? (
          <div className="flex flex-col md:flex-row p-5 md:p-0 gap-5 my-12">
            <div className="flex-[3]">
              <ResourceDetails resources={resources} />
            </div>
            <div className="flex flex-[6] flex-col gap-5">
              {resources.map((resource) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={resource.id}
                  href={resource.link}
                >
                  <ResourceCard resource={resource} />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div>No resources available</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ResourceDetailTemplate;
