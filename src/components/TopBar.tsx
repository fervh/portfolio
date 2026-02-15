"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Briefcase, FolderKanban, Mail, Moon, Sun, User, Wrench } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", Icon: User },
  { href: "#experience", label: "Experience", Icon: Briefcase },
  { href: "#projects", label: "Projects", Icon: FolderKanban },
  { href: "#skills", label: "Skills", Icon: Wrench },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

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
    <div className="top-bar scroll-reveal" data-delay="1">
      <div className="brand-mark">
        <span className="brand-dot" />
        Fernando Vela Hidalgo
      </div>
      <nav className="top-links" aria-label="Primary navigation">
        {navLinks.map(({ href, label, Icon }) => (
          <a key={href} href={href}>
            <Icon className="icon" aria-hidden="true" />
            {label}
          </a>
        ))}
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
              {navLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="icon" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
