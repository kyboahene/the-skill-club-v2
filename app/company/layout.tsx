import type { Metadata } from "next";

import "../../styles/globals.css";
import { env } from "@/env";
import { Toaster } from "@/modules/shared/components/sonner";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/theskillclub.svg" />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
