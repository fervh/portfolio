"use client";

import { useEffect } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='interactive']";

export default function CustomCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const supportsFinePointer =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsFinePointer || prefersReducedMotion) {
      return undefined;
    }

    root.classList.add("cursor-enabled");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let rafId = 0;

    const setVars = (x: number, y: number) => {
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      root.style.setProperty("--cursor-ring-x", `${ringX}px`);
      root.style.setProperty("--cursor-ring-y", `${ringY}px`);
      rafId = requestAnimationFrame(animateRing);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVars(targetX, targetY);
      root.classList.add("cursor-ready");

      const target = event.target;
      if (target instanceof Element && target.closest(INTERACTIVE_SELECTOR)) {
        root.classList.add("cursor-interactive");
      } else {
        root.classList.remove("cursor-interactive");
      }
    };

    const onPointerDown = () => root.classList.add("cursor-pressed");
    const onPointerUp = () => root.classList.remove("cursor-pressed");
    const onMouseLeave = () => root.classList.add("cursor-hidden");
    const onMouseEnter = () => root.classList.remove("cursor-hidden");

    setVars(targetX, targetY);
    root.style.setProperty("--cursor-ring-x", `${ringX}px`);
    root.style.setProperty("--cursor-ring-y", `${ringY}px`);
    rafId = requestAnimationFrame(animateRing);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);

      root.classList.remove(
        "cursor-enabled",
        "cursor-ready",
        "cursor-interactive",
        "cursor-pressed",
        "cursor-hidden"
      );
      root.style.removeProperty("--cursor-x");
      root.style.removeProperty("--cursor-y");
      root.style.removeProperty("--cursor-ring-x");
      root.style.removeProperty("--cursor-ring-y");
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  );
}
