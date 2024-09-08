export const metadata = {
  title: {
    default: "Dashboard",
    template: `%s | The Skill Club - Talent`,
  },
  description:
    "We are bridging the gap between industry and academia by connecting talented students with fast growth and high impact companies (startups)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
