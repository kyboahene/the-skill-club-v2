import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Dashboard",
    template: `%s | The Skill Club - Talent`,
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/theskillclub.svg" />
      </head>
      <body>
        <main>{children}</main>;
      </body>
    </html>
  );
}
