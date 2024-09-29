import type { Metadata } from "next";

// env
import { env } from "@/env";

// modules
import { Toaster } from "@/modules/shared/components/sonner";
import TawkToChart from "@/modules/shared/components/tawto-chart";

// styles
import "@/styles/globals.css";
import Footer from "@/modules/layout/templates/footer";
import Navbar from "@/modules/layout/templates/main-nav";

export const metadata: Metadata = {
  title: {
    default:
      "The Skill Club - Hire Tech Savvy Talents | Internship & Entry Level Opportunities",
    template: `%s | We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)`,
  },
  icons: [
    { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon.ico" },
  ],
  openGraph: {
    images: [env.APP_IMG],
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
  keywords: [
    "talents",
    "careers",
    "startups",
    "developers",
    "internship",
    "software developers",
    "programming",
  ],
  metadataBase: new URL(env.BASE_URL),
};

export default function RootLayout({
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
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <TawkToChart />
        </main>
      </body>
    </html>
  );
}
