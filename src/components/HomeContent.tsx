"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
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

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Beagle Systems",
    dates: "Sep 2025 — Present",
    location: "Hamburg, Germany",
    summary: "Design and optimization of flight control and embedded software for long-range UAV operations.",
    highlights: [
      "Develop flight control stacks and firmware drivers for STM32 and ARM-based platforms.",
      "Implement real-time capabilities with FreeRTOS and NuttX for fixed-wing and VTOL systems.",
      "Integrate and debug USB, SPI, I2C, CAN, and SDIO interfaces for mission reliability.",
    ],
  },
  {
    role: "Research Technician - Autonomous Vehicles",
    company: "Autonomous Mobility and Perception Lab (AMPL)",
    dates: "Aug 2023 — Jul 2025",
    location: "Madrid, Spain",
    summary: "R&D for intelligent mobility systems, combining real-time perception, communication, and validation.",
    highlights: [
      "Built ROS/ROS2 sensor drivers in C++ and Python for IMU, LiDAR, and camera pipelines.",
      "Developed ECU-level communication over CAN bus and low-level real-time controls.",
      "Delivered streaming and monitoring systems with UDP/TCP/WebRTC/SRT and Grafana dashboards.",
    ],
  },
  {
    role: "Technical Bids Intern",
    company: "Serveo",
    dates: "Sep 2022 — Mar 2023",
    location: "Madrid, Spain",
    summary: "Supported technology tenders and technical proposals for smart city and digitalization programs.",
    highlights: [
      "Contributed to technical documentation and coordinated partner solutions in IoT and AI/ML.",
    ],
  },
  {
    role: "STEM Instructor",
    company: "The Creative Minds Education",
    dates: "Dec 2020 — Jul 2022",
    location: "Madrid, Spain",
    summary: "Delivered robotics, programming, and 3D design training for student cohorts.",
    highlights: ["Designed practical, project-based sessions focused on automation and electronics."],
  },
];

const education = [
  {
    program: "Master's Degree in Robotics and Automation",
    school: "Carlos III University of Madrid (UC3M)",
    dates: "2023 — 2025",
    summary: "Master thesis: Vehicle Immersion System / Immersive VR platform for real-time interaction (10/10).",
  },
  {
    program: "B.Sc. Industrial Electronics and Automation Engineering",
    school: "Carlos III University of Madrid (UC3M) - Bilingual",
    dates: "2019 — 2023",
    summary: "Final degree thesis: Miniature Autonomous Vehicle.",
  },
];

const projects = [
  {
    title: "Drone Design and Construction",
    summary:
      "Built FPV and autonomous drones using custom electronics, 3D-printed frames, and iterative control tuning.",
    tags: ["PX4", "Embedded", "Control", "3D Printing"],
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "VR Development for Robotics Control",
    summary:
      "Developed Unity and ROS interfaces for immersive teleoperation and real-time robotics interaction experiments.",
    tags: ["Unity", "ROS", "C#", "Realtime"],
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Design & Additive Manufacturing",
    summary:
      "FDM workflow optimization, slicer tuning, and functional prototyping across PLA, PETG, ABS, TPU, and nylon-based materials.",
    tags: ["Recycling", "Filament Extrusion", "CAD", "3D Printing"],
    image:
      "https://images.unsplash.com/photo-1741848137437-56fb14b7ba87?auto=format&fit=crop&w=1600&h=900&q=80",
  },
];

const certifications = [
  { name: "EASA Drone Pilot A1/A3" },
  { name: "EASA Drone Pilot A2" },
  { name: "EASA Drone Pilot STS" },
  { name: "UAS Operator" },
  { name: "Radio Operator" },
  { name: "MATLAB Certified" },
  { name: "Scientific Computing with Python" },
  { name: "Construction 4.0" },
  { name: "Mobile App Development" },
  { name: "Web Development" },
  { name: "Driver's License (Class B)" },
  {
    name: "Generative AI on GCP: Building Generative AI-powered Apps",
  },
  {
    name: "Generative AI on AWS: Creating Intelligent Chatbots",
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
    title: "Languages and Frameworks",
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
      { label: "Unity", icon: SiUnity },
      { label: "JavaScript", icon: FaJs },
      { label: "Backend", icon: FaServer },
      { label: "Frontend", icon: MdWeb },
    ],
  },
  {
    title: "Robotics and Hardware",
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
      { label: "I2C/SPI", icon: FaNetworkWired },
      { label: "PX4", icon: FaRobot },
      { label: "Real-time Protocols", icon: IoMdWifi },
    ],
  },
  {
    title: "Tools and Simulation",
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
      { label: "RobotStudio", icon: FaRobot },
      { label: "Gazebo", icon: FaRobot },
      { label: "Webots", icon: FaRobot },
      { label: "n8n", icon: SiN8N },
    ],
  },
];

const languages = ["Spanish - Native", "English - C1", "German - A2"];

export default function HomeContent() {
  const [activeSkillCluster, setActiveSkillCluster] = useState(skillClusters[0].title);

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
            <h1>Robotics Engineer · Autonomy and Embedded Systems</h1>
            <p className="lead">
              Robotics engineer connecting research and production with real-time
              software for UAVs and intelligent vehicles.
            </p>
            <div className="chip-row">
              <span className="chip">Flight Control</span>
              <span className="chip">ROS2</span>
              <span className="chip">Perception</span>
              <span className="chip">Embedded RTOS</span>
            </div>
            <div className="hero-availability">
              <span className="dot" />
              <p>Open to international relocation and autonomous systems roles.</p>
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
              <div>
                <p className="hero-meta-label">Current</p>
                <p className="hero-meta-value">Senior Software Engineer · Beagle Systems</p>
              </div>
              <div>
                <p className="hero-meta-label">Base</p>
                <p className="hero-meta-value">Hamburg / Madrid</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="marquee scroll-reveal" data-delay="3" aria-label="Technical specialties">
        <div className="marquee-track">
          <span>Flight Control · PX4 · NuttX · FreeRTOS · ROS2 · Sensor Fusion · SLAM · Perception · CAN Bus · UAV Systems · </span>
          <span>Flight Control · PX4 · NuttX · FreeRTOS · ROS2 · Sensor Fusion · SLAM · Perception · CAN Bus · UAV Systems · </span>
        </div>
      </section>

      <section id="about" className="section-flow scroll-reveal" data-delay="4">
        <div className="section-header">
          <h2>Profile</h2>
          <span className="section-tag">01</span>
        </div>
        <p className="about-lead">
          Robotics engineer with experience in autonomous systems R&D, specializing in
          hardware-software integration for real-world autonomous vehicles.
        </p>
        <p>
          Focused on ROS/ROS2 integration, low-level communication, sensor calibration,
          and real-time perception pipelines that move from lab validation into
          production-ready applications.
        </p>
      </section>

      <section id="experience" className="section-flow scroll-reveal" data-delay="5">
        <div className="section-header">
          <h2>Experience</h2>
          <span className="section-tag">02</span>
        </div>
        <div className="timeline timeline-lean">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="muted">
                  {item.company} · {item.dates} · {item.location}
                </p>
              </div>
              <p>{item.summary}</p>
              {item.highlights && item.highlights.length > 0 ? (
                <ul className="timeline-points">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-flow scroll-reveal" data-delay="6">
        <div className="section-header">
          <h2>Projects</h2>
          <span className="section-tag">03</span>
        </div>
        <div className="project-gallery">
          {projects.map((project) => (
            <article className="project-tile" key={project.title}>
              <div
                className="project-media"
                style={{ "--project-image": `url(${project.image})` } as CSSProperties}
                role="img"
                aria-label={project.title}
              />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
          <h2>Skills</h2>
          <span className="section-tag">04</span>
        </div>
        <div className="skill-clusters">
          <div className="skill-filter" role="tablist" aria-label="Skill categories">
            {skillClusters.map((cluster) => (
              <button
                key={cluster.title}
                type="button"
                role="tab"
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
              <article className="skill-cluster" key={cluster.title} role="tabpanel">
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

      <section id="education" className="section-flow scroll-reveal" data-delay="8">
        <div className="section-header">
          <h2>Education</h2>
          <span className="section-tag">05</span>
        </div>
        <div className="timeline timeline-lean">
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

      <section className="section-flow scroll-reveal" data-delay="9">
        <div className="section-header">
          <h2>Certifications</h2>
          <span className="section-tag">06</span>
        </div>
        <ul className="cert-grid">
          {certifications.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </section>

      <section className="section-flow scroll-reveal" data-delay="10">
        <div className="section-header">
          <h2>Languages</h2>
          <span className="section-tag">07</span>
        </div>
        <div className="language-row">
          {languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section-flow scroll-reveal" data-delay="11">
        <div className="section-header">
          <h2>Contact</h2>
          <span className="section-tag">08</span>
        </div>
        <div className="contact-grid">
          <div>
            <p className="contact-cta">Let&apos;s collaborate on autonomy and robotics systems.</p>
            <p className="muted">Available for international opportunities in advanced robotics.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:fernandovelahidalgo@gmail.com">
              <Mail className="icon" aria-hidden="true" />
              fernandovelahidalgo@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/fernandovelahidalgo/"
              target="_blank"
              rel="noreferrer"
            >
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
