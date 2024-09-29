import type { Metadata } from "next";

// env
import { env } from "@/env";

// css
import "@/styles/globals.css";

// modules
import { Toaster } from "@/modules/shared/components/sonner";
import CompanyDashboardLayoutTemplate from "@/modules/company-dashboard/templates/dashboard-layout-template";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | The Skill Club - Company`,
  },
  openGraph: {
    images: [env.APP_IMG],
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
  keywords: ["talents", "careers", "startups", "developers", "internship"],
  metadataBase: new URL(env.BASE_URL),
};

export default function CompanyLayout({
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
        <main>
          <CompanyDashboardLayoutTemplate>
            {children}
            <Toaster />
          </CompanyDashboardLayoutTemplate>
        </main>
      </body>
    </html>
  );
}
