import { Contact, UserCheck, UserRound, UserX } from "lucide-react";
import React from "react";
import RecentJobsTable from "../../components/recent-jobs-table";
import Activities from "../../components/actvities";

const DashboardTemplate = () => {
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
                <h1 className="font-bold text-5xl">150</h1>
                <p className="text-gray-500">Applications</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <UserRound />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">80</h1>
                <p className="text-gray-500">Shortlisted</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <Contact />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">20</h1>
                <p className="text-gray-500">Onboarded</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <UserCheck />
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-6 flex justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">40</h1>
                <p className="text-gray-500">Rejected</p>
              </div>
              <div className="rounded-full p-4 bg-green">
                <UserX />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <RecentJobsTable />
            <Activities />
            {/* <AppliedJobs appliedJobs={appliedJobs} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTemplate;
