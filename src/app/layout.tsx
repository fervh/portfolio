import type { Metadata } from "next";
import "./globals.css";
import PageBackground from "@/components/PageBackground";
import TopBar from "@/components/TopBar";
import TopBarMask from "@/components/TopBarMask";
import TopBarSpacer from "@/components/TopBarSpacer";

export const metadata: Metadata = {
  title: "Fernando Vela Hidalgo | Portfolio",
  description: "Personal portfolio for Fernando Vela Hidalgo.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageBackground />
        <TopBarMask />
        <TopBar />
        <TopBarSpacer>
          <main className="page">{children}</main>
        </TopBarSpacer>
      </body>
    </html>
  );
}
