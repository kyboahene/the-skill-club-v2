import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "TheSkillClub - Hire Tech Savvy Talents | Internship & Entry Level Opportunities",
    template: `%s | We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)`,
  },
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_APP_IMG}`],
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
  keywords: ["talents", "careers", "startups", "developers", "internship"],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
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
      <body>{children}</body>
    </html>
  );
}
