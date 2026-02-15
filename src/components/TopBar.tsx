"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Briefcase, GraduationCap, Mail, User } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", Icon: User },
  { href: "#experience", label: "Experience", Icon: Briefcase },
  { href: "#education", label: "Education", Icon: GraduationCap },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
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
