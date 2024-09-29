import type { Metadata } from "next";
import "../../styles/globals.css";

import { env } from "@/env";

// modules
import TalentDashboardTopNav from "@/modules/talent-dashboard/components/topnav";
import TalentDashboardSidebar from "@/modules/talent-dashboard/components/sidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | The Skill Club - Talent`,
  },
  openGraph: {
    images: [env.APP_IMG],
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
  keywords: ["talents", "careers", "startups", "developers", "internship"],
  metadataBase: new URL(env.BASE_URL),
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/theskillclub.svg" />
      </head>
      <body>
        <main className="flex h-screen overflow-hidden border border-red-700">
          <TalentDashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TalentDashboardTopNav />
            <section className="flex-1 overflow-y-auto bg-[#f0f5f3]">
              <div className="px-6 py-6 pt-20 sm:px-14">{children}</div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
