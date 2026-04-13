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
  { label: "Years of experience", value: "5+" },
  { label: "Regions worked", value: "Spain · Germany" },
];

const coreSkillCategories = [
  {
    title: "Embedded & Systems Engineering",
    skills: [
      "Embedded Systems (C/C++, ARM, STM32)",
      "Low-level & high-level software integration",
      "Real-Time Systems (FreeRTOS, NuttX)",
      "Hardware-software integration & debugging",
    ],
  },
  {
    title: "Autonomy & Robotics",
    skills: [
      "UAV Autonomy & Flight Control (PX4, ArduPilot)",
      "Sensor Fusion & Perception (LiDAR, Cameras, IMU, GNSS)",
      "Computer Vision & AI for autonomous systems",
      "Mapping, localization, and environment understanding",
    ],
  },
  {
    title: "Systems & Architecture",
    skills: [
      "System Architecture Design (embedded & distributed systems)",
      "Safety-critical systems & reliability engineering",
      "Real-time data pipelines and performance optimization",
    ],
  },
  {
    title: "Communication & Interfaces",
    skills: [
      "CAN, SPI, I2C, USB, SDIO",
      "MAVLink and UAV communication protocols",
    ],
  },
  {
    title: "Engineering & Tools",
    skills: [
      "Debugging & root-cause analysis (system-level)",
      "Simulation, testing, and validation frameworks",
      "Cross-functional collaboration (hardware, software, systems)",
    ],
  },
];

const experience = [
  {
    role: "Senior Software Engineer - UAV Systems",
    company: "Beagle Systems",
    dates: "Sep 2025 - Present · Full-time",
    location: "Hamburg, Germany",
    summary:
      "Design, develop, and optimize flight control, perception, and embedded software for long-range UAVs, enabling safe and scalable BVLOS operations across Europe.",
    highlights: [
      <>Architect, develop, and maintain the full <strong>UAV software stack</strong>, spanning low-level firmware, middleware, and high-level embedded applications on STM32 and ARM-based systems. Work extensively with embedded computing platforms, optimizing performance across constrained hardware and heterogeneous architectures.</>,
      <>Design and implement <strong>flight control systems</strong> for fixed-wing and VTOL platforms, focusing on safety-critical performance, robustness, and fault tolerance. Contribute to and extend open-source autopilot frameworks (<strong>PX4, ArduPilot</strong>), improving modularity, performance, and system reliability.</>,
      <>Develop and integrate <strong>perception pipelines</strong> using LiDAR, cameras, and onboard sensors for real-time environmental awareness and autonomous decision-making. Implement real-time data processing and sensor fusion under <strong>RTOS</strong> environments (FreeRTOS, NuttX), ensuring deterministic and low-latency behavior.</>,
      <>Integrate, validate, and debug hardware-software interfaces (USB, SPI, I2C, CAN, SDIO), ensuring reliable communication across avionics and sensor subsystems. Perform system-level debugging and root-cause analysis, resolving complex issues across firmware, hardware, and distributed components.</>,
      <>Define and document system and software architectures, enabling scalability, maintainability, and clean interfaces across subsystems. Develop internal tooling, simulation environments, and automated testing frameworks for validation and continuous integration of UAV systems.</>,
      <>Collaborate with cross-functional teams (hardware, perception, systems, operations) to align software with mission requirements and improve overall performance. Drive continuous improvement in software quality, reliability, and engineering processes within safety-critical environments.</>,
    ],
    impact: "Enhanced autonomous flight capabilities through tight integration of perception, control, and embedded systems. Increased system reliability and reduced failure rates via structured debugging and validation methodologies. Contributed to scalable UAV platforms ready for long-range autonomous operations in real-world environments.",
  },
  {
    role: "Research Engineer - Autonomous Vehicle Technologies",
    company: "Autonomous Mobility and Perception Lab (AMPL)",
    dates: "Aug 2023 - Jul 2025 · Full-time",
    location: "Madrid, Spain",
    summary:
      "Design and development of perception systems, sensor architectures, and AI-driven solutions for autonomous and connected vehicles.",
    highlights: [
      <>Designed and implemented <strong>perception systems</strong> using computer vision and machine learning for environment detection and scene understanding. Built and validated AI models for real-time perception in dynamic scenarios.</>,
      <>Developed <strong>mapping and localization</strong> algorithms for intelligent vehicle navigation. Contributed to the architecture and design of autonomous systems, including sensor layouts and real-time data processing pipelines.</>,
      <>Performed integration, setup, calibration, and validation of <strong>sensor systems</strong> (LiDAR, cameras, IMU, GNSS) in real-world environments. Defined data structures and pipelines for efficient acquisition and processing of multimodal sensor data.</>,
      <>Designed algorithms for data verification, validation, and security, ensuring robustness in safety-critical systems. Developed proof-of-concept solutions and use cases for <strong>connected and autonomous vehicle</strong> (CAV) environments.</>,
      <>Contributed to hybrid mobility systems, integrating connected and automated vehicles in mixed environments.</>,
    ],
    impact: "Improved perception accuracy and robustness through optimized sensor integration and system design. Enabled scalable architectures for real-time autonomous driving systems. Bridged research and engineering by delivering deployable, validated solutions.",
  },
  {
    role: "Technical Bid Engineer - Internship",
    company: "Serveo",
    dates: "Sep 2022 - Mar 2023",
    location: "Madrid, Spain",
    summary:
      "Supported the design and delivery of technical and economic proposals for large-scale public-sector projects across smart infrastructure domains.",
    highlights: [
      <>Designed end-to-end technical solutions for public tenders in <strong>Smart Cities, Smart Energy, Smart Buildings, and Transport Systems</strong>. Structured and coordinated bid strategies, ensuring timely and high-quality proposal submissions.</>,
      <>Integrated advanced technologies into proposals, including <strong>Intelligent Transport Systems</strong> (ITS), Computer Vision and AI-based video analytics, <strong>IoT platforms</strong> and data-driven services, and Cloud ecosystems (Azure, AWS, GCP). Positioned digitalization technologies including automation, robotics, digital twins, and augmented reality in competitive public tenders.</>,
      <>Collaborated with multidisciplinary teams and partners to align technical capabilities with client requirements.</>,
    ],
    impact: "Strengthened the technological positioning of proposals in competitive public tenders and contributed to delivering innovation-driven, high-value infrastructure solutions.",
  },
  {
    role: "Robotics, Programming and 3D Design Instructor",
    company: "The Creative Minds Education",
    dates: "Dec 2020 - Jul 2022",
    location: "Madrid, Spain",
    summary:
      "Taught robotics, programming, and 3D design to students, fostering technical skills and creative problem-solving.",
    highlights: [
      <>Delivered hands-on <strong>robotics and programming courses</strong>, covering topics from basic electronics to autonomous systems. Developed curriculum materials and practical exercises aligned with student learning objectives.</>,
      <>Guided students through the design, prototyping, and fabrication process using <strong>CAD tools and 3D printing</strong> technologies. Emphasized iterative design thinking and real-world engineering workflows.</>,
      <>Mentored students in project-based learning environments, supporting technical development and problem-solving skills.</>,
    ],
    impact: "Enabled students to develop foundational skills in robotics and digital fabrication, building confidence in STEM disciplines through applied, hands-on learning experiences.",
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
  "Cross-functional collaboration and knowledge transfer",
  "Adaptability to dynamic project requirements and constraints",
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
  const [activeCoreSkillCategory, setActiveCoreSkillCategory] = useState(coreSkillCategories[0].title);
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
        const topBar = document.querySelector('.top-bar') as HTMLElement;
        if (target && topBar) {
          const topBarHeight = topBar.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - topBarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <>
      <EtherealShadow
        id="hero-shadow"
        color="rgba(42, 156, 117, 0.25)"
        animation={{ scale: 100, speed: 72 }}
        noise={{ opacity: 0.8, scale: 1.2 }}
        sizing="fill"
      />
      <header id="about" className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Senior Software Engineer - R&D Robotic Engineer</h1>
            <p className="lead">
              I bridge research and production through full-stack development, embedded systems, and hardware integration for autonomous platforms. My work spans LiDAR/camera perception pipelines, real-time control systems, backend services, and frontend interfaces. Coordinating across software, hardware, and team workflows for UAVs and intelligent vehicles.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="cta-button">
                Contact me
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
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="hero-mini-linkedin-icon" aria-hidden="true" />
              </a>
              <div className="hero-image" role="img" aria-label="Autonomous robotics environment" />
            </div>
            <div className="hero-meta">
              {metrics.map((metric, index) => (
                <article key={metric.label} className="hero-kpi">
                  <p className={`hero-meta-value ${index === 2 ? 'hero-meta-value-regions' : ''}`}>{metric.value}</p>
                  <p className="hero-meta-label">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="marquee" aria-label="Technical specialties">
        <div 
          className="marquee-track" 
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          <span>
            Flight Control - PX4 - Research - FreeRTOS - ROS2 - Sensor Fusion - SLAM -
            Perception - CAN Bus - UAV Systems - Autonomous Vehicles - LIDAR -
            Camera - Development - AI - Automation - Real-time - Robotics -
          </span>
          <span>
            Flight Control - PX4 - Research - FreeRTOS - ROS2 - Sensor Fusion - SLAM -
            Perception - CAN Bus - UAV Systems - Autonomous Vehicles - LIDAR -
            Camera - Development - AI - Automation - Real-time - Robotics -
          </span>
        </div>
      </section>

      <section className="section-flow">
        <div className="section-header">
          <SectionHeadingHighlight title="Profile" highlight="Profile" />
          <span className="section-tag">01</span>
        </div>
        <SectionAccentLine />
        <p className="about-lead">
          Robotics engineer specialized in <strong>autonomy stack integration</strong> and lead-level
          technical ownership for production-grade autonomous systems.
        </p>
        <p>
          My work spans embedded systems development (STM32, ARM, FreeRTOS/NuttX), 
          <strong>flight control software</strong> (PX4, ArduPilot), and <strong>perception pipelines</strong> integrating 
          LiDAR, cameras, and multi-sensor fusion. I architect and implement real-time software stacks for 
          autonomous UAVs and intelligent vehicles, bridging low-level firmware with high-level autonomy behaviors.
        </p>
        <p>
          I focus on production-ready reliability: system-level debugging, hardware-software integration, 
          validation frameworks, and <strong>safety-critical design</strong>. My approach combines research rigor with 
          engineering pragmatism, delivering deployable solutions for real-world autonomous operations 
          across Europe.
        </p>
      </section>

      <section id="experience" className="section-flow">
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
                {item.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {item.impact && (
                <p className="timeline-impact" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--muted)' }}>
                  <strong>Impact:</strong> {item.impact}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-flow">
        <div className="section-header">
          <SectionHeadingHighlight title="Self-Development Projects" highlight="Projects" />
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

      <section id="skills" className="section-flow">
        <div className="section-header">
          <SectionHeadingHighlight title="Skills" highlight="Skills" />
          <span className="section-tag">04</span>
        </div>
        <SectionAccentLine />
        
        {/* Core Skills Section */}
        <div className="core-skills-section">
          <h3 className="section-subtitle">Core Skills</h3>
          
          <div className="skill-filter" role="tablist" aria-label="Core skill categories">
            {coreSkillCategories.map((category) => (
              <button
                key={category.title}
                type="button"
                role="tab"
                aria-selected={activeCoreSkillCategory === category.title}
                className={`skill-filter-btn ${activeCoreSkillCategory === category.title ? "is-active" : ""}`}
                onClick={() => setActiveCoreSkillCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {coreSkillCategories
            .filter((category) => category.title === activeCoreSkillCategory)
            .map((category) => (
              <article
                className="core-skill-panel"
                key={category.title}
                role="tabpanel"
              >
                <ul className="core-skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>

        {/* Technical Skills Section - existing interactive clusters */}
        <div className="technical-skills-section" style={{ marginTop: '3rem' }}>
          <h3 className="section-subtitle">Technical Skills</h3>
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
        </div>
      </section>

      <section className="section-flow" id="achievements">
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

      <section className="section-flow">
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

      <section className="section-flow">
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

      <section id="education" className="section-flow">
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

      <section className="section-flow">
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

      <section id="contact" className="section-flow">
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
            <a href="https://www.linkedin.com/in/fernandovelahidalgo/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="icon" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="https://github.com/fervh" target="_blank" rel="noopener noreferrer">
              <Github className="icon" aria-hidden="true" />
              GitHub
            </a>
            <a href="https://maps.google.com/?q=Hamburg,Germany" target="_blank" rel="noopener noreferrer">
              <MapPin className="icon" aria-hidden="true" />
              Hamburg, Germany
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
