import React from "react";
import TalentDashboardTopNav from "../../components/topnav";
import TalentDashboardSidebar from "../../components/sidebar";

type DashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

const DashboardLayoutTemplate = ({
  children,
}: DashboardLayoutTemplateProps) => {
  return (
    <div className="flex h-screen overflow-hidden border border-red-700">
      <TalentDashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TalentDashboardTopNav />
        <section className="flex-1 overflow-y-auto bg-[#f0f5f3]">
          <div className="px-6 py-6 pt-20 sm:px-14">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayoutTemplate;
