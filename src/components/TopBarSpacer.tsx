"use client";

import { useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";

type TopBarSpacerProps = {
  children: ReactNode;
};

export default function TopBarSpacer({ children }: TopBarSpacerProps) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const topBar = document.querySelector<HTMLElement>(".top-bar");
    if (!topBar) {
      return undefined;
    }

    const updateHeight = () => {
      setHeight(topBar.getBoundingClientRect().height);
    };

    updateHeight();

    let resizeObserver: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(topBar);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver?.disconnect();
    };
  }, []);

  return <div style={{ paddingTop: height }}>{children}</div>;
}
