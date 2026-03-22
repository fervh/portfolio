"use client";

import { useEffect, useState, useSyncExternalStore, useRef, useId } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Award, Briefcase, FileUser, FolderKanban, Mail, Moon, Sun, User, Wrench } from "lucide-react";
import { EtherealShadow } from "./EtherealShadow";

// Animated header background with turbulence effect
function HeaderBackground() {
  const id = useId().replace(/:/g, "");
  const filterId = `header-turbulence-${id}`;
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    if (!turbulenceRef.current) return;
    
    let frame = 0;
    let animationId: number;
    
    const animate = () => {
      if (turbulenceRef.current) {
        frame += 0.003; // Slow, subtle movement
        turbulenceRef.current.setAttribute(
          'baseFrequency', 
          `${0.002 + Math.sin(frame) * 0.0008} ${0.004 + Math.cos(frame * 0.8) * 0.001}`
        );
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: -2,
    }}>
      {/* SVG Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              ref={turbulenceRef}
              result="turbulence"
              numOctaves="2"
              baseFrequency="0.002 0.004"
              seed="7"
              type="fractalNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="35"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated gradient blob */}
      <div style={{
        position: 'absolute',
        inset: '-40px',
        filter: `url(#${filterId})`,
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(42, 156, 117, 0.35) 0%, rgba(42, 156, 117, 0.18) 40%, transparent 70%)',
        }} />
      </div>

      {/* Additional atmospheric layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(42, 156, 117, 0.12) 50%, transparent 100%)',
        animation: 'headerShimmer 12s ease-in-out infinite',
      }} />
    </div>
  );
}

const navLinks = [
  { href: "#about", label: "About", Icon: User },
  { href: "#experience", label: "Experience", Icon: Briefcase },
  { href: "#projects", label: "Projects", Icon: FolderKanban },
  { href: "#skills", label: "Skills", Icon: Wrench },
  { href: "#achievements", label: "Achievements", Icon: Award },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const router = useRouter();
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const getSystemTheme = () => "dark"; // Default to dark

    const applyTheme = (nextTheme: "light" | "dark") => {
      root.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme);
    };

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      applyTheme("dark"); // Default to dark mode
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
      
      // Detect active section - always select the closest one
      const sections = navLinks.map(link => link.href.replace('#', ''));
      let closestSection = "";
      let closestDistance = Infinity;
      
      const viewportCenter = window.innerHeight / 2;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = `#${sectionId}`;
          }
        }
      }
      
      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For same-page navigation, use smooth scroll
    e.preventDefault();
    e.currentTarget.blur(); // Remove focus immediately
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

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
    <div className={`top-bar ${isScrolled ? "is-scrolled" : ""}`}>
      {/* Animated turbulence background layer */}
      <HeaderBackground />
      <div className="brand-mark">
        <span className="brand-dot" />
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} aria-label="Go to About section">
          Fernando Vela Hidalgo
        </a>
      </div>
      <nav className="top-links" aria-label="Primary navigation">
        {navLinks.map(({ href, label, Icon }) => (
          <a 
            key={href} 
            href={href} 
            onClick={(e) => handleNavClick(e, href)}
            className={activeSection === href ? 'active' : ''}
          >
            <Icon className="icon" aria-hidden="true" />
            {label}
          </a>
        ))}
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
              {navLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  role="menuitem"
                  onClick={(e) => {
                    handleNavClick(e, href);
                    setMenuOpen(false);
                  }}
                  className={activeSection === href ? 'active' : ''}
                >
                  <Icon className="icon" aria-hidden="true" />
                  {label}
                </a>
              ))}
              <Link href="/cv" role="menuitem" className="nav-cv-link" onClick={() => setMenuOpen(false)}>
                <FileUser className="icon" aria-hidden="true" />
                CV
              </Link>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
