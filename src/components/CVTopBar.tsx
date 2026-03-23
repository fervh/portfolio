"use client";

import { useEffect, useState, useSyncExternalStore, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FileUser, Moon, Sun, User } from "lucide-react";

export default function CVTopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const topBarRef = useRef<HTMLElement>(null);
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  // Update CSS variable with actual top bar height
  useEffect(() => {
    const updateTopBarHeight = () => {
      if (topBarRef.current) {
        const height = topBarRef.current.offsetHeight;
        document.documentElement.style.setProperty('--top-bar-height', `${height}px`);
      }
    };

    updateTopBarHeight();
    window.addEventListener('resize', updateTopBarHeight);
    return () => window.removeEventListener('resize', updateTopBarHeight);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const getSystemTheme = () => (media.matches ? "dark" : "light");

    const applyTheme = (nextTheme: "light" | "dark") => {
      root.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme);
    };

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      const initialTheme = (root.getAttribute("data-theme") as "light" | "dark" | null) ?? getSystemTheme();
      applyTheme(initialTheme);
    }

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleSystemThemeChange);
    return () => media.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header ref={topBarRef} className={`top-bar cv-page-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="brand-mark">
        <span className="brand-dot" />
        <Link href="/" aria-label="Go to home">
          Fernando Vela Hidalgo
        </Link>
      </div>
      <nav className="top-links" aria-label="Primary navigation">
        <Link href="/" className="nav-home-link">
          <User className="icon" aria-hidden="true" />
          Portfolio
        </Link>
        <Link href="/cv" className="nav-cv-link">
          <FileUser className="icon" aria-hidden="true" />
          CV
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <Sun className="icon" aria-hidden="true" />
          ) : (
            <Moon className="icon" aria-hidden="true" />
          )}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </nav>
      <div className="mobile-nav">
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="mobile-nav-icon" aria-hidden="true">
            <span className="mobile-nav-line" />
            <span className="mobile-nav-line" />
            <span className="mobile-nav-line" />
          </span>
        </button>
        {isClient &&
          createPortal(
            <button
              type="button"
              className={`mobile-backdrop ${menuOpen ? "is-open" : ""}`}
              aria-label="Close navigation menu"
              aria-hidden={!menuOpen}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            />,
            document.body
          )}
        {isClient &&
          createPortal(
            <div
              id="mobile-menu"
              className={`mobile-dropdown ${menuOpen ? "is-open" : ""}`}
              role="menu"
              aria-hidden={!menuOpen}
            >
              <button
                type="button"
                role="menuitem"
                className="theme-toggle theme-toggle-mobile"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="icon" aria-hidden="true" />
                ) : (
                  <Moon className="icon" aria-hidden="true" />
                )}
                <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
              </button>
              <Link 
                href="/" 
                role="menuitem" 
                onClick={() => setMenuOpen(false)}
              >
                <User className="icon" aria-hidden="true" />
                Portfolio
              </Link>
              <Link href="/cv" role="menuitem" onClick={() => setMenuOpen(false)}>
                <FileUser className="icon" aria-hidden="true" />
                CV
              </Link>
            </div>,
            document.body
          )}
      </div>
    </header>
  );
}
