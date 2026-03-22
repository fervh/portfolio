"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaCarSide,
  FaCode,
  FaCogs,
  FaJs,
  FaMicrochip,
  FaNetworkWired,
  FaRobot,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdWifi } from "react-icons/io";
import UC3MLogo from "./UC3MLogo";
import { EtherealShadow } from "./EtherealShadow";
import { IoCameraOutline, IoMapOutline } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import {
  SiArduino,
  SiAutodesk,
  SiBlender,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGrafana,
  SiLinux,
  SiN8N,
  SiOpencv,
  SiPytorch,
  SiPython,
  SiRaspberrypi,
  SiSharp,
  SiSiemens,
  SiTensorflow,
  SiUnity,
} from "react-icons/si";
import { TbCircuitBattery, TbCircuitChangeover, TbMathIntegralX } from "react-icons/tb";
import SectionAccentLine from "@/components/SectionAccentLine";
import SectionHeadingHighlight from "@/components/SectionHeadingHighlight";

const metrics = [
  { label: "Years building robotics systems", value: "5+" },
  { label: "Autonomy and perception programs", value: "20+" },
  { label: "Regions worked", value: "ES / DE" },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Beagle Systems",
    dates: "Sep 2025 - Present",
    location: "Hamburg, Germany",
    summary:
      "Design and optimization of flight control and embedded software for long-range UAV operations.",
    highlights: [
      "Developed flight control stacks and firmware drivers for STM32 and ARM platforms.",
      "Implemented real-time capabilities with FreeRTOS and NuttX for fixed-wing and VTOL systems.",
      "Integrated USB, SPI, I2C, CAN, and SDIO interfaces to improve mission reliability.",
    ],
  },
  {
    role: "Research Technician - Autonomous Vehicles",
    company: "Autonomous Mobility and Perception Lab (AMPL)",
    dates: "Aug 2023 - Jul 2025",
    location: "Madrid, Spain",
    summary:
      "R&D for intelligent mobility systems, combining real-time perception, communication, and validation.",
    highlights: [
      "Built ROS/ROS2 sensor drivers in C++ and Python for IMU, LiDAR, and camera pipelines.",
      "Developed ECU-level communication over CAN bus and low-level real-time control modules.",
      "Delivered streaming and monitoring systems with UDP/TCP/WebRTC/SRT and Grafana dashboards.",
    ],
  },
  {
    role: "Technical Bids Intern",
    company: "Serveo",
    dates: "Sep 2022 - Mar 2023",
    location: "Madrid, Spain",
    summary:
      "Supported technology tenders and technical proposals for smart city and digitalization programs.",
    highlights: [
      "Contributed to technical documentation and partner coordination in IoT and AI/ML initiatives.",
    ],
  },
];

const education = [
  {
    program: "Master's Degree in Robotics and Automation",
    school: "Carlos III University of Madrid (UC3M)",
    dates: "2023 - 2025",
    summary:
      "Master thesis: Vehicle Immersion System / immersive VR platform for real-time interaction (10/10).",
  },
  {
    program: "B.Sc. Industrial Electronics and Automation Engineering (Bilingual)",
    school: "Carlos III University of Madrid (UC3M)",
    dates: "2019 - 2023",
    summary: "Final degree thesis: Miniature Autonomous Vehicle.",
  },
];

const projects = [
  {
    title: "Drone Design and Construction",
    summary:
      "Built FPV and autonomous drones using custom electronics, 3D-printed frames, and iterative control tuning.",
    impact: "Reliable flight behavior under real-world field conditions.",
    tags: ["PX4", "Embedded", "Control", "3D Printing"],
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "VR Development for Robotics Control",
    summary:
      "Developed Unity and ROS interfaces for immersive teleoperation and real-time robotics interaction experiments.",
    impact: "Reduced iteration time in operator training and HMI validation.",
    tags: ["Unity", "ROS", "C#", "Realtime"],
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Design and Additive Manufacturing",
    summary:
      "FDM workflow optimization, slicer tuning, and functional prototyping across engineering-grade materials.",
    impact: "Faster prototyping cycles with more robust mechanical iterations.",
    tags: ["CAD", "FDM", "Materials", "Rapid Prototyping"],
    image:
      "https://images.unsplash.com/photo-1741848137437-56fb14b7ba87?auto=format&fit=crop&w=1600&h=900&q=80",
  },
];

type SkillItem = {
  label: string;
  icon: IconType;
};

type SkillCluster = {
  title: string;
  icon: IconType;
  skills: SkillItem[];
};

const skillClusters: SkillCluster[] = [
  {
    title: "Software and AI",
    icon: FaCode,
    skills: [
      { label: "Python", icon: SiPython },
      { label: "C/C++", icon: SiCplusplus },
      { label: "ROS/ROS2", icon: RiRobot2Line },
      { label: "PyTorch", icon: SiPytorch },
      { label: "TensorFlow", icon: SiTensorflow },
      { label: "OpenCV", icon: SiOpencv },
      { label: "MATLAB", icon: TbMathIntegralX },
      { label: "Simulink", icon: TbCircuitBattery },
      { label: "C#", icon: SiSharp },
      { label: "JavaScript", icon: FaJs },
      { label: "Backend APIs", icon: FaServer },
      { label: "Web interfaces", icon: MdWeb },
    ],
  },
  {
    title: "Robotics and Embedded",
    icon: FaMicrochip,
    skills: [
      { label: "CAN Bus", icon: FaCarSide },
      { label: "FlexRay", icon: FaNetworkWired },
      { label: "Sensor Fusion", icon: IoCameraOutline },
      { label: "SLAM", icon: IoMapOutline },
      { label: "PCB Design", icon: TbCircuitChangeover },
      { label: "Arduino", icon: SiArduino },
      { label: "STM32", icon: FaMicrochip },
      { label: "Raspberry Pi", icon: SiRaspberrypi },
      { label: "Low-level Control", icon: FaTools },
      { label: "I2C/SPI/UART", icon: FaNetworkWired },
      { label: "PX4", icon: FaRobot },
      { label: "Real-time Protocols", icon: IoMdWifi },
    ],
  },
  {
    title: "Tooling and Delivery",
    icon: FaCogs,
    skills: [
      { label: "Docker", icon: SiDocker },
      { label: "Linux", icon: SiLinux },
      { label: "Git", icon: SiGit },
      { label: "Grafana", icon: SiGrafana },
      { label: "Fusion 360", icon: SiAutodesk },
      { label: "Solid Edge", icon: SiSiemens },
      { label: "Blender", icon: SiBlender },
      { label: "LabVIEW", icon: ImLab },
      { label: "Unity", icon: SiUnity },
      { label: "Gazebo/Webots", icon: FaRobot },
      { label: "n8n automation", icon: SiN8N },
      { label: "System debugging", icon: FaTools },
    ],
  },
];

const addedStrengths = [
  "Technical leadership in multidisciplinary teams",
  "System architecture from prototype to production",
  "Clear technical documentation and stakeholder communication",
  "Experiment design, validation, and iterative optimization",
];

const achievements = [
  {
    title: "Master Thesis: Vehicle Immersion System",
    year: "2025",
    detail:
      "Immersive VR interaction platform for autonomous and teleoperated vehicle workflows.",
  },
  {
    title: "Final Degree Thesis: Miniature Autonomous Vehicle",
    year: "2023",
    detail:
      "End-to-end design and implementation of a working miniature autonomous mobility system.",
  },
  {
    title: "1st Place - ASTI Robotics Competition",
    year: "2019",
    detail:
      "Awarded for robotics innovation, implementation quality, and technical execution.",
  },
  {
    title: "Young Researchers Finalist (Complutense)",
    year: "-",
    detail:
      "Recognized for technical research contribution and experimental rigor.",
  },
];

const capabilitySignals = [
  { area: "LiDAR and Camera Detection", value: 92 },
  { area: "Sensor Calibration and Synchronization", value: 90 },
  { area: "ROS2 and Real-time Integration", value: 93 },
  { area: "CAN/FlexRay and Low-level Comms", value: 88 },
  { area: "System Validation and Observability", value: 89 },
  { area: "Technical Leadership and Execution", value: 86 },
];

const languages = ["Spanish (native)", "English (C1)", "German (A2)"];

export default function HomeContent() {
  const [activeSkillCluster, setActiveSkillCluster] = useState(skillClusters[0].title);
  const getSkillId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the hash from URL to prevent instant jump
      const hashValue = hash.substring(1);
      window.history.replaceState(null, '', window.location.pathname);
      
      // Wait for page to render, then smooth scroll
      setTimeout(() => {
        const target = document.getElementById(hashValue);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".scroll-reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 120px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <EtherealShadow
        color="rgba(42, 156, 117, 0.25)"
        animation={{ scale: 100, speed: 72 }}
        noise={{ opacity: 0.8, scale: 1.2 }}
        sizing="fill"
      />
      <header id="about" className="hero scroll-reveal" data-delay="2">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Senior Software Engineer - R&D Robotic Engineer</h1>
            <p className="lead">
              I bridge research and product delivery through embedded software, LiDAR/camera
              detection pipelines, and control systems for UAVs and intelligent vehicles.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="cta-button">
                Hire me for autonomy systems
                <ArrowRight className="icon" aria-hidden="true" />
              </a>
              <Link href="/cv" className="cta-button is-ghost">
                Open CV
              </Link>
            </div>
            <div className="chip-row">
              <span className="chip">Flight Control</span>
              <span className="chip">ROS2</span>
              <span className="chip">LiDAR Detection</span>
              <span className="chip">Camera Perception</span>
              <span className="chip">Embedded RTOS</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <a
                className="hero-mini-linkedin"
                href="https://www.linkedin.com/in/fernandovelahidalgo/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="hero-mini-linkedin-icon" aria-hidden="true" />
              </a>
              <div className="hero-image" role="img" aria-label="Autonomous robotics environment" />
            </div>
            <div className="hero-meta">
              {metrics.map((metric) => (
                <article key={metric.label} className="hero-kpi">
                  <p className="hero-meta-label">{metric.label}</p>
                  <p className="hero-meta-value">{metric.value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="marquee scroll-reveal" data-delay="3" aria-label="Technical specialties">
        <div className="marquee-track">
          <span>
            Flight Control - PX4 - NuttX - FreeRTOS - ROS2 - Sensor Fusion - SLAM -
            Perception - CAN Bus - UAV Systems -
          </span>
          <span>
            Flight Control - PX4 - NuttX - FreeRTOS - ROS2 - Sensor Fusion - SLAM -
            Perception - CAN Bus - UAV Systems -
          </span>
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="4">
        <div className="section-header">
          <SectionHeadingHighlight title="Profile" highlight="Profile" />
          <span className="section-tag">01</span>
        </div>
        <SectionAccentLine />
        <p className="about-lead">
          Robotics engineer specialized in autonomy stack integration and lead-level
          technical ownership for systems that
          must perform outside the lab.
        </p>
        <p>
          I focus on LiDAR/camera perception pipelines, low-level communications,
          and real-time control loops that turn prototypes into production-ready systems.
        </p>
      </section>

      <section id="experience" className="section-flow scroll-reveal" data-delay="5">
        <div className="section-header">
          <SectionHeadingHighlight title="Experience" highlight="Experience" />
          <span className="section-tag">02</span>
        </div>
        <SectionAccentLine />
        <div className="timeline timeline-lean">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="muted">
                  {item.company} - {item.dates} - {item.location}
                </p>
              </div>
              <p>{item.summary}</p>
              <ul className="timeline-points">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-flow scroll-reveal" data-delay="6">
        <div className="section-header">
          <SectionHeadingHighlight title="Selected Projects" highlight="Projects" />
          <span className="section-tag">03</span>
        </div>
        <SectionAccentLine />
        <div className="project-gallery">
          {projects.map((project, index) => (
            <article className={`project-tile ${index === 0 ? "project-featured" : ""}`} key={project.title}>
              <div
                className="project-media"
                style={{ "--project-image": `url(${project.image})` } as CSSProperties}
                role="img"
                aria-label={project.title}
              />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-impact">Impact: {project.impact}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-flow scroll-reveal" data-delay="7">
        <div className="section-header">
          <SectionHeadingHighlight title="Technical Skills" highlight="Skills" />
          <span className="section-tag">04</span>
        </div>
        <SectionAccentLine />
        <div className="skill-clusters">
          <div className="skill-filter" role="tablist" aria-label="Skill categories">
            {skillClusters.map((cluster) => (
              <button
                key={cluster.title}
                type="button"
                id={`skill-tab-${getSkillId(cluster.title)}`}
                role="tab"
                aria-controls={`skill-panel-${getSkillId(cluster.title)}`}
                aria-selected={activeSkillCluster === cluster.title}
                className={`skill-filter-btn ${activeSkillCluster === cluster.title ? "is-active" : ""}`}
                onClick={() => setActiveSkillCluster(cluster.title)}
              >
                <cluster.icon className="skill-filter-icon" aria-hidden="true" />
                {cluster.title}
              </button>
            ))}
          </div>

          {skillClusters
            .filter((cluster) => cluster.title === activeSkillCluster)
            .map((cluster) => (
              <article
                className="skill-cluster"
                key={cluster.title}
                id={`skill-panel-${getSkillId(cluster.title)}`}
                role="tabpanel"
                aria-labelledby={`skill-tab-${getSkillId(cluster.title)}`}
                tabIndex={0}
              >
                <ul className="skill-row">
                  {cluster.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li className="skill-pill" key={skill.label}>
                        <SkillIcon className="skill-pill-icon" aria-hidden="true" />
                        <span>{skill.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="8" id="achievements">
        <div className="section-header">
          <SectionHeadingHighlight title="Achievements" highlight="Achievements" />
          <span className="section-tag">05</span>
        </div>
        <SectionAccentLine />
        <div className="achievement-flow">
          {achievements.map((item) => (
            <article key={item.title} className="achievement-row">
              <p className="achievement-year">{item.year}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="9">
        <div className="section-header">
          <SectionHeadingHighlight title="Additional Strengths" highlight="Strengths" />
          <span className="section-tag">06</span>
        </div>
        <SectionAccentLine />
        <ul className="cert-grid">
          {addedStrengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-flow scroll-reveal" data-delay="10">
        <div className="section-header">
          <SectionHeadingHighlight title="Capability Signals" highlight="Signals" />
          <span className="section-tag">07</span>
        </div>
        <SectionAccentLine />
        <div className="signal-list" aria-label="Capability level indicators">
          {capabilitySignals.map((signal) => (
            <article className="signal-item" key={signal.area}>
              <p className="signal-label">{signal.area}</p>
              <div className="signal-track" role="meter" aria-valuenow={signal.value} aria-valuemin={0} aria-valuemax={100}>
                <span className="signal-fill" style={{ width: `${signal.value}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section-flow scroll-reveal" data-delay="11">
        <div className="section-header">
          <SectionHeadingHighlight title="Education" highlight="Education" />
          <span className="section-tag">08</span>
        </div>
        <SectionAccentLine />
        <div className="timeline timeline-lean">
          {education.map((item) => (
            <article className="timeline-item" key={item.program}>
              <div>
                <h3>{item.program}</h3>
                <div className="education-school-row">
                  <a 
                    href="https://www.uc3m.es/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="education-school-link"
                  >
                    <UC3MLogo className="education-logo" />
                    <span className="muted">{item.school}</span>
                  </a>
                  <span className="muted"> - {item.dates}</span>
                </div>
              </div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-flow scroll-reveal" data-delay="12">
        <div className="section-header">
          <SectionHeadingHighlight title="Languages" highlight="Languages" />
          <span className="section-tag">09</span>
        </div>
        <SectionAccentLine />
        <div className="language-row">
          {languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section-flow scroll-reveal" data-delay="13">
        <div className="section-header">
          <SectionHeadingHighlight title="Contact" highlight="Contact" />
          <span className="section-tag">10</span>
        </div>
        <SectionAccentLine />
        <div className="contact-grid">
          <div>
            <p className="contact-cta">Let&apos;s collaborate on autonomy and robotics systems.</p>
            <p className="muted">
              Available for international opportunities in advanced robotics and
              intelligent mobility.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:contact@velahidalgo.com">
              <Mail className="icon" aria-hidden="true" />
              contact@velahidalgo.com
            </a>
            <a href="https://www.linkedin.com/in/fernandovelahidalgo/" target="_blank" rel="noreferrer">
              <Linkedin className="icon" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="https://github.com/fervh" target="_blank" rel="noreferrer">
              <Github className="icon" aria-hidden="true" />
              GitHub
            </a>
            <a href="https://maps.google.com/?q=Madrid,Spain" target="_blank" rel="noreferrer">
              <MapPin className="icon" aria-hidden="true" />
              Madrid, Spain
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2026 Fernando Vela Hidalgo. All rights reserved.</p>
      </footer>
    </>
  );
}
