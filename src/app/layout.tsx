import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem('theme');var system=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var theme=(stored==='light'||stored==='dark')?stored:system;document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body>
        <CustomCursor />
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
