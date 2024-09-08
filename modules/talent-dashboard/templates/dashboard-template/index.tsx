import {
  FileText,
  MessageSquare,
  CalendarClock,
  BriefcaseBusiness,
} from "lucide-react";
import React from "react";
import Lottie from "react-lottie";

// components
import AppliedJobs from "../../components/applied-jobs";
import RecommendedJobs from "../../components/recommended-jobs";

// lottie
import waving from "@/lottie/waving.json";

// utils
import { ApplicationWithDetails, JobDetail } from "@/lib/types";
import { reactLottieConfig } from "@/lib/utils/react-lottie-config";

// shared
import { Skeleton } from "@/modules/shared/components/skeleton";

const DashboardTemplate = () => {
  // const messages: string | any[] = [];
  // const isLoading = false;
  // const talentName = "";
  const appliedJobs: ApplicationWithDetails[] | undefined = [];
  // const assessmentLeft: string | any[] = [];
  const recommendedJobs: JobDetail[] | undefined = [];

  // if (false) {
  //   return (
  //     <div className="flex flex-col gap-4 mt-12">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  //         {[1, 2, 3, 4].map((i, index) => (
  //           <Skeleton key={index} className="h-44 w-full rounded-[15px]" />
  //         ))}
  //       </div>
  //       <div className="flex flex-col gap-4 lg:flex-row">
  //         <Skeleton className="h-[300px] w-full rounded-[15px]" />
  //         <Skeleton className="h-[300px] w-full rounded-[15px]" />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="flex-col-reverse md:flex-row mt-12 text-sm overflow-hidden">
      <div className="">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold  text-xl mb-3 flex flex-row gap-1 items-center">
            <span className="header-font">Howdy, User!</span>
            <div>
              {/* <Lottie
                width={35}
                height={35}
                options={reactLottieConfig(waving)}
              /> */}
            </div>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">00</h1>
                <p className="text-gray-500">Applied Jobs</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <BriefcaseBusiness />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">00</h1>
                <p className="text-gray-500">Scheduled Interviews</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <CalendarClock />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">00</h1>
                <p className="text-gray-500">Messages</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <MessageSquare />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">00</h1>
                <p className="text-gray-500">Assessments Left</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <FileText />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <RecommendedJobs recommendedJobs={recommendedJobs} /> */}
            {/* <AppliedJobs appliedJobs={appliedJobs} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTemplate;
