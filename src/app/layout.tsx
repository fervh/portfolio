import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageBackground from "@/components/PageBackground";

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
            __html: `(function(){try{var stored=localStorage.getItem('theme');var theme=(stored==='light'||stored==='dark')?stored:'dark';document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
