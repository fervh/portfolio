"use client";

import { useLayoutEffect, useState } from "react";

export default function TopBarMask() {
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

  const clipPath =
    height > 0 ? `inset(0 0 calc(100% - ${height}px) 0)` : "inset(0 0 100% 0)";

  return (
    <div
      aria-hidden="true"
      className="page-background"
      style={{ clipPath, zIndex: 50 }}
    />
  );
}
