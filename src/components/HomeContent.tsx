"use client";

import { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Beagle Systems",
    dates: "Sep 2025 — Present",
    location: "Hamburg, Germany",
    summary:
      "Designing flight control and embedded software for long-range UAVs, including drivers, firmware, and real-time systems.",
  },
  {
    role: "Research Technician · Autonomous Vehicles",
    company: "Autonomous Mobility and Perception Lab",
    dates: "Aug 2023 — Jul 2025",
    location: "Madrid, Spain",
    summary:
      "Developed perception architectures, mapping validation, and AI algorithms for intelligent vehicle platforms.",
  },
  {
    role: "Technical Bids Intern",
    company: "Serveo",
    dates: "Sep 2022 — Mar 2023",
    location: "Madrid, Spain",
    summary:
      "Built technical and economic proposals for smart cities, robotics, and automation initiatives.",
  },
  {
    role: "STEM Instructor",
    company: "The Creative Minds Education",
    dates: "Dec 2020 — Jul 2022",
    location: "Madrid, Spain",
    summary:
      "Taught robotics, programming, and 3D design for student cohorts.",
  },
  {
    role: "Private Tutor",
    company: "Tusclasesparticulares",
    dates: "Oct 2018 — Jun 2021",
    location: "Madrid, Spain",
    summary: "Tutored robotics, programming, and applied technology subjects.",
  },
];

const education = [
  {
    program: "Master in Robotics and Automation",
    school: "Universidad Carlos III de Madrid",
    dates: "2023 — 2025",
    summary:
      "Master thesis: “Immersive Virtual Reality Platform for Real-Time Interaction” (10/10).",
  },
  {
    program: "Industrial Electronics and Automation Engineering",
    school: "Universidad Carlos III de Madrid",
    dates: "2019 — 2023",
    summary: "Bilingual program focused on embedded systems and automation.",
  },
];

const certifications = [
  {
    name: "Generative AI on GCP: Building Generative AI-powered Apps",
    issuer: "Codecademy",
    date: "Sep 2025",
  },
  {
    name: "Generative AI on AWS: Creating Intelligent Chatbots",
    issuer: "Codecademy",
    date: "Sep 2025",
  },
];

const skills = [
  "C++",
  "PX4",
  "Embedded Systems",
  "FreeRTOS / NuttX",
  "Perception & Mapping",
  "Autonomous Vehicles",
  "Robotics",
  "Control Systems",
];

export default function HomeContent() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".scroll-reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in-view"));
      return undefined;
    }

    const revealIfVisible = (element: Element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.85) {
        setTimeout(() => {
          element.classList.add("in-view");
        }, 60);
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, 60);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px 160px 0px",
      }
    );

    elements.forEach((element) => {
      if (!revealIfVisible(element)) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="hero scroll-reveal" data-delay="2">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Research Technician · Robotics & Automation</h1>
            <p className="lead">
              Senior software engineer focused on autonomous systems, embedded
              flight control, and real-time robotics platforms.
            </p>
            <div className="chip-row">
              <span className="chip">Autonomy</span>
              <span className="chip">Embedded</span>
              <span className="chip">UAV Systems</span>
            </div>
          </div>
          <div className="hero-meta">
            <div>
              <p className="hero-meta-label">Current</p>
              <p className="hero-meta-value">Senior Software Engineer · Beagle Systems</p>
            </div>
            <div>
              <p className="hero-meta-label">Location</p>
              <p className="hero-meta-value">Hamburg, Germany</p>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section-flow scroll-reveal" data-delay="3">
        <div className="section-header">
          <h2>About</h2>
          <span className="section-tag">01</span>
        </div>
        <p>
          I specialize in software for autonomous and connected systems, blending
          research with production-grade engineering. My work spans perception,
          mapping, and embedded control for UAVs and intelligent vehicles.
        </p>
      </section>

      <section id="experience" className="section-flow scroll-reveal" data-delay="4">
        <div className="section-header">
          <h2>Experience</h2>
          <span className="section-tag">02</span>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="muted">
                  {item.company} · {item.dates} · {item.location}
                </p>
              </div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section-flow scroll-reveal" data-delay="5">
        <div className="section-header">
          <h2>Education</h2>
          <span className="section-tag">03</span>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={item.program}>
              <div>
                <h3>{item.program}</h3>
                <p className="muted">
                  {item.school} · {item.dates}
                </p>
              </div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="6">
        <div className="section-header">
          <h2>Certifications</h2>
          <span className="section-tag">04</span>
        </div>
        <div className="timeline">
          {certifications.map((item) => (
            <article className="timeline-item" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p className="muted">
                  {item.issuer} · {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="7">
        <div className="section-header">
          <h2>Skills</h2>
          <span className="section-tag">05</span>
        </div>
        <ul className="skill-row">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section-flow scroll-reveal" data-delay="8">
        <div className="section-header">
          <h2>Contact</h2>
          <span className="section-tag">06</span>
        </div>
        <div className="contact-grid">
          <div>
            <p className="contact-cta">Let’s collaborate on autonomy projects.</p>
            <p className="muted">Reach out via LinkedIn for opportunities.</p>
          </div>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/fernandovelahidalgo"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="icon" aria-hidden="true" />
              LinkedIn profile
            </a>
            <a href="https://github.com/fervh" target="_blank" rel="noreferrer">
              <Github className="icon" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
