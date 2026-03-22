"use client";

import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import CVTopBar from "./CVTopBar";

export default function ConditionalTopBar() {
  const pathname = usePathname();
  const isCvPage = pathname === "/cv";

  if (isCvPage) {
    return <CVTopBar />;
  }

  return <TopBar />;
}
