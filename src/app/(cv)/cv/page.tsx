import type { Metadata } from "next";
import Link from "next/link";
import CVPreviewClient from "@/components/CVPreviewClient";
import CVDownloadClient from "@/components/CVDownloadClient";
import type { CVData } from "@/components/ResumePDF";

export const metadata: Metadata = {
  title: "Fernando Vela Hidalgo | CV",
  description: "Lead-track robotics and autonomy CV of Fernando Vela Hidalgo.",
};

// CV Data - centralized for consistency
const cvData: CVData = {
  name: "Fernando Vela Hidalgo",
  role: "Senior Software Engineer - R&D Robotic Engineer",
  headline: "Perception, real-time systems, and hardware/software integration for production-grade autonomous platforms.",
  email: "contact@velahidalgo.com",
  linkedin: "linkedin.com/in/fernandovelahidalgo",
  github: "github.com/fervh",
  website: "fernandovelahidalgo.com",
  location: "Hamburg, Germany",
  
  summary: "Lead-track robotics engineer with end-to-end ownership across autonomy systems, from LiDAR/camera perception pipelines to real-time embedded deployment. Experienced in architecture decisions, multidisciplinary coordination, and reliability-focused delivery for field-ready autonomous platforms.",
  
  impactHighlights: [
    "Led autonomy software blocks from prototype maturity to production-oriented reliability.",
    "Improved perception stability in constrained scenarios through LiDAR/camera and sensor-time alignment.",
    "Reduced integration friction between software, electronics, and real-time constraints across UAV programs.",
    "Introduced validation-first workflows with simulation and observability to shorten iteration loops.",
  ],
  
  leadershipAreas: [
    "Technical ownership of autonomy architecture decisions and interfaces across teams.",
    "Cross-functional alignment between robotics software, embedded electronics, and testing.",
    "Design reviews, technical documentation, and mentorship in implementation standards.",
    "Roadmap-oriented execution balancing reliability, velocity, and maintainability.",
  ],
  
  autonomyExpertise: [
    "Multi-sensor perception pipelines with LiDAR, camera, and IMU data streams.",
    "Object detection/tracking and robust perception handoff into autonomy behaviors.",
    "Sensor calibration, synchronization, and uncertainty-aware preprocessing.",
    "Realtime performance tuning for field conditions and constrained onboard compute.",
  ],
  
  systemsReliability: [
    "Real-time control software with FreeRTOS/NuttX and low-level hardware interfaces.",
    "ROS/ROS2 middleware integration for distributed autonomy and telemetry.",
    "Validation through simulation/HIL-style workflows, reproducible tests, and regression checks.",
    "Fail-safe oriented thinking: diagnostics, degraded modes, and reliability under uncertainty.",
  ],
  
  experience: [
    {
      role: "Senior Software Engineer (Lead-track)",
      company: "Beagle Systems",
      dates: "Sep 2025 - Present",
      location: "Hamburg, Germany",
      bullets: [
        "Led the design and optimization of flight control and embedded software for long-range UAV operations.",
        "Directed firmware architecture decisions for ARM/STM32 platforms and interface reliability.",
        "Owned real-time integration on FreeRTOS/NuttX, improving mission robustness under operational constraints.",
      ],
      impact: "Strengthened production readiness and reliability of mission-critical UAV software stacks.",
    },
    {
      role: "Research Technician - Autonomous Vehicles",
      company: "Autonomous Mobility and Perception Lab (AMPL)",
      dates: "Aug 2023 - Jul 2025",
      location: "Madrid, Spain",
      bullets: [
        "Built and evolved ROS/ROS2 drivers in C++/Python for IMU, LiDAR, and camera sensing chains.",
        "Developed ECU-level communication over CAN and low-level modules for deterministic controls.",
        "Implemented observability pipelines with UDP/TCP/WebRTC/SRT and Grafana for faster system diagnosis.",
      ],
      impact: "Accelerated autonomy validation loops and improved perception pipeline stability in real scenarios.",
    },
    {
      role: "Technical Bids Intern",
      company: "Serveo",
      dates: "Sep 2022 - Mar 2023",
      location: "Madrid, Spain",
      bullets: [
        "Prepared technical proposals for smart city digitalization programs with robotics/IoT relevance.",
        "Coordinated multi-partner technical inputs for feasible AI/ML and connected systems delivery.",
      ],
      impact: "Improved technical clarity and execution viability in cross-stakeholder engineering proposals.",
    },
  ],
  
  projects: [
    {
      name: "Autonomous Drone Systems",
      details: "Designed and built FPV/autonomous drones integrating flight control software, electronics, and mechanical iteration.",
      stack: "PX4, Embedded C/C++, Control Systems, 3D Printing",
    },
    {
      name: "LiDAR/Camera Perception and Teleoperation",
      details: "Developed perception and teleoperation interfaces connecting ROS pipelines and immersive control environments.",
      stack: "ROS/ROS2, LiDAR, Camera Vision, Unity, Realtime Data",
    },
    {
      name: "Validation and Monitoring Tooling",
      details: "Implemented telemetry, diagnostics, and visual monitoring workflows to improve reproducibility and debugging speed.",
      stack: "Grafana, UDP/TCP/SRT, Linux, Dev Tooling",
    },
  ],
  
  education: [
    {
      degree: "Master's Degree in Robotics and Automation",
      school: "Carlos III University of Madrid (UC3M)",
      year: "2023 - 2025",
      details: "Master thesis: Vehicle Immersion System / immersive VR platform for real-time interaction (10/10).",
    },
    {
      degree: "B.Sc. Industrial Electronics and Automation Engineering (Bilingual)",
      school: "Carlos III University of Madrid (UC3M)",
      year: "2019 - 2023",
      details: "Final degree thesis: Miniature Autonomous Vehicle.",
    },
  ],
  
  skillGroups: [
    {
      title: "Perception and Autonomy",
      values: "LiDAR/Camera integration, Sensor Fusion, Detection and Tracking, SLAM foundations, ROS/ROS2 dataflows",
    },
    {
      title: "Real-time and Embedded",
      values: "C/C++, Python, FreeRTOS, NuttX, STM32, CAN Bus, SPI/I2C/UART, deterministic control integration",
    },
    {
      title: "Systems Engineering",
      values: "HW/SW architecture, integration strategy, observability, validation workflows, failure-mode awareness",
    },
    {
      title: "Leadership and Delivery",
      values: "Technical ownership, design reviews, mentoring, roadmap execution, cross-functional communication",
    },
  ],
  
  certificationGroups: [
    {
      title: "Drone Operations (EASA)",
      items: ["A1/A3", "A2", "STS-01", "STS-02", "UAS Operator", "Radio Operator"],
    },
    {
      title: "Technical and Software",
      items: [
        "MATLAB Certification",
        "Scientific Computing with Python",
        "Web and App Development",
        "Generative AI on GCP/AWS",
      ],
    },
  ],
  
  languages: "Spanish (native), English (C1), German (A2).",
};

export default function CvPage() {
  return (
    <div className="cv-preview-wrapper">
      {/* Sticky header with download button */}
      <div className="cv-preview-header">
        <div className="cv-preview-header-content">
          <div className="cv-preview-title">
            <h1 className="cv-preview-title-text">CV Preview</h1>
            <p className="cv-preview-subtitle">Fernando Vela Hidalgo - Senior Software Engineer - R&D Robotic Engineer</p>
          </div>
          <div className="cv-preview-actions">
            <CVDownloadClient data={cvData} />
            <Link href="/" className="cv-back-link">
              Back to portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="cv-preview-container">
        <CVPreviewClient data={cvData} />
      </div>
    </div>
  );
}
