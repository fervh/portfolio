import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://fernando.velahidalgo.com"),
  title: {
    default: "Fernando Vela Hidalgo | Portfolio",
    template: "%s | Fernando Vela Hidalgo",
  },
  description:
    "Senior software engineer and R&D robotics engineer focused on autonomy, embedded systems, perception, and full-stack product delivery.",
  applicationName: "Fernando Vela Hidalgo Portfolio",
  authors: [{ name: "Fernando Vela Hidalgo", url: "https://fernando.velahidalgo.com" }],
  creator: "Fernando Vela Hidalgo",
  publisher: "Fernando Vela Hidalgo",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://fernando.velahidalgo.com",
    title: "Fernando Vela Hidalgo | Portfolio",
    description:
      "Portfolio and CV of Fernando Vela Hidalgo, focused on robotics, autonomy, embedded systems, and full-stack engineering.",
    siteName: "Fernando Vela Hidalgo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Vela Hidalgo | Portfolio",
    description:
      "Portfolio and CV of Fernando Vela Hidalgo, focused on robotics, autonomy, embedded systems, and full-stack engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body>
        <CustomCursor />
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
