import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
