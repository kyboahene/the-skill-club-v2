import React from "react";

import CompanyDashboardTopNav from "../../components/topnav";
import CompanyDashboardSidebar from "../../components/sidebar";

type CompanyDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

const CompanyDashboardLayoutTemplate = ({
  children,
}: CompanyDashboardLayoutTemplateProps) => {
  return (
    <main className="flex h-screen overflow-hidden border border-red-700">
      <CompanyDashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <CompanyDashboardTopNav />
        <section className="flex-1 overflow-y-auto bg-[#f0f5f3]">
          <div className="px-6 py-6 pt-20 sm:px-14">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default CompanyDashboardLayoutTemplate;
