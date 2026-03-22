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
  headline: "I bridge research and production through full-stack development, embedded systems, and hardware integration for autonomous platforms. My work spans LiDAR/camera perception pipelines, real-time control systems, backend services, and frontend interfaces. Coordinating across software, hardware, and team workflows for UAVs and intelligent vehicles.",
  email: "contact@velahidalgo.com",
  linkedin: "linkedin.com/in/fernandovelahidalgo",
  github: "github.com/fervh",
  website: "fernandovelahidalgo.com",
  location: "Hamburg, Germany",
  
  summary: "Robotics engineer specialized in autonomy stack integration and lead-level technical ownership for systems that must perform outside the lab. I focus on LiDAR/camera perception pipelines, low-level communications, and real-time control loops that turn prototypes into production-ready systems.",
  
  impactHighlights: [
    "5+ Years building robotics systems",
    "20+ Autonomy and perception programs",
    "Regions worked: ES / DE",
  ],
  
  leadershipAreas: [
    "Technical leadership in multidisciplinary teams",
    "System architecture from prototype to production",
    "Clear technical documentation and stakeholder communication",
    "Experiment design, validation, and iterative optimization",
  ],
  
  autonomyExpertise: [
    "Embedded Systems (C/C++, ARM, STM32)",
    "Low-level & high-level software integration",
    "Real-Time Systems (FreeRTOS, NuttX)",
    "Hardware-software integration & debugging",
    "UAV Autonomy & Flight Control (PX4, ArduPilot)",
    "Sensor Fusion & Perception (LiDAR, Cameras, IMU, GNSS)",
    "Computer Vision & AI for autonomous systems",
    "Mapping, localization, and environment understanding",
  ],
  
  systemsReliability: [
    "System Architecture Design (embedded & distributed systems)",
    "Safety-critical systems & reliability engineering",
    "Real-time data pipelines and performance optimization",
    "CAN, SPI, I2C, USB, SDIO",
    "MAVLink and UAV communication protocols",
    "Debugging & root-cause analysis (system-level)",
    "Simulation, testing, and validation frameworks",
    "Cross-functional collaboration (hardware, software, systems)",
  ],
  
  experience: [
    {
      role: "Senior Software Engineer - UAV Systems",
      company: "Beagle Systems",
      dates: "Sep 2025 - Present · Full-time",
      location: "Hamburg, Germany",
      bullets: [
        "Architect, develop, and maintain the full UAV software stack, spanning low-level firmware, middleware, and high-level embedded applications on STM32 and ARM-based systems. Work extensively with embedded computing platforms, optimizing performance across constrained hardware and heterogeneous architectures.",
        "Design and implement flight control systems for fixed-wing and VTOL platforms, focusing on safety-critical performance, robustness, and fault tolerance. Contribute to and extend open-source autopilot frameworks (PX4, ArduPilot), improving modularity, performance, and system reliability.",
        "Develop and integrate perception pipelines using LiDAR, cameras, and onboard sensors for real-time environmental awareness and autonomous decision-making. Implement real-time data processing and sensor fusion under RTOS environments (FreeRTOS, NuttX), ensuring deterministic and low-latency behavior.",
        "Integrate, validate, and debug hardware-software interfaces (USB, SPI, I2C, CAN, SDIO), ensuring reliable communication across avionics and sensor subsystems. Perform system-level debugging and root-cause analysis, resolving complex issues across firmware, hardware, and distributed components.",
        "Define and document system and software architectures, enabling scalability, maintainability, and clean interfaces across subsystems. Develop internal tooling, simulation environments, and automated testing frameworks for validation and continuous integration of UAV systems.",
        "Collaborate with cross-functional teams (hardware, perception, systems, operations) to align software with mission requirements and improve overall performance. Drive continuous improvement in software quality, reliability, and engineering processes within safety-critical environments.",
      ],
      impact: "Enhanced autonomous flight capabilities through tight integration of perception, control, and embedded systems. Increased system reliability and reduced failure rates via structured debugging and validation methodologies. Contributed to scalable UAV platforms ready for long-range autonomous operations in real-world environments.",
    },
    {
      role: "Research Engineer - Autonomous Vehicle Technologies",
      company: "Autonomous Mobility and Perception Lab (AMPL)",
      dates: "Aug 2023 - Jul 2025 · Full-time",
      location: "Madrid, Spain",
      bullets: [
        "Designed and implemented perception systems using computer vision and machine learning for environment detection and scene understanding. Built and validated AI models for real-time perception in dynamic scenarios.",
        "Developed mapping and localization algorithms for intelligent vehicle navigation. Contributed to the architecture and design of autonomous systems, including sensor layouts and real-time data processing pipelines.",
        "Performed integration, setup, calibration, and validation of sensor systems (LiDAR, cameras, IMU, GNSS) in real-world environments. Defined data structures and pipelines for efficient acquisition and processing of multimodal sensor data.",
        "Designed algorithms for data verification, validation, and security, ensuring robustness in safety-critical systems. Developed proof-of-concept solutions and use cases for connected and autonomous vehicle (CAV) environments.",
        "Contributed to hybrid mobility systems, integrating connected and automated vehicles in mixed environments.",
      ],
      impact: "Improved perception accuracy and robustness through optimized sensor integration and system design. Enabled scalable architectures for real-time autonomous driving systems. Bridged research and engineering by delivering deployable, validated solutions.",
    },
    {
      role: "Technical Bid Engineer - Internship",
      company: "Serveo",
      dates: "Sep 2022 - Mar 2023",
      location: "Madrid, Spain",
      bullets: [
        "Designed end-to-end technical solutions for public tenders in Smart Cities, Smart Energy, Smart Buildings, and Transport Systems. Structured and coordinated bid strategies, ensuring timely and high-quality proposal submissions.",
        "Integrated advanced technologies into proposals, including Intelligent Transport Systems (ITS), Computer Vision and AI-based video analytics, IoT platforms and data-driven services, and Cloud ecosystems (Azure, AWS, GCP). Positioned digitalization technologies including automation, robotics, digital twins, and augmented reality in competitive public tenders.",
        "Collaborated with multidisciplinary teams and partners to align technical capabilities with client requirements.",
      ],
      impact: "Strengthened the technological positioning of proposals in competitive public tenders and contributed to delivering innovation-driven, high-value infrastructure solutions.",
    },
    {
      role: "Robotics, Programming and 3D Design Instructor",
      company: "The Creative Minds Education",
      dates: "Dec 2020 - Jul 2022",
      location: "Madrid, Spain",
      bullets: [
        "Delivered hands-on robotics and programming courses, covering topics from basic electronics to autonomous systems. Developed curriculum materials and practical exercises aligned with student learning objectives.",
        "Guided students through the design, prototyping, and fabrication process using CAD tools and 3D printing technologies. Emphasized iterative design thinking and real-world engineering workflows.",
        "Mentored students in project-based learning environments, supporting technical development and problem-solving skills.",
      ],
      impact: "Enabled students to develop foundational skills in robotics and digital fabrication, building confidence in STEM disciplines through applied, hands-on learning experiences.",
    },
  ],
  
  projects: [
    {
      name: "Drone Design and Construction",
      details: "Built FPV and autonomous drones using custom electronics, 3D-printed frames, and iterative control tuning. Impact: Reliable flight behavior under real-world field conditions.",
      stack: "PX4, Embedded, Control, 3D Printing",
    },
    {
      name: "VR Development for Robotics Control",
      details: "Developed Unity and ROS interfaces for immersive teleoperation and real-time robotics interaction experiments. Impact: Reduced iteration time in operator training and HMI validation.",
      stack: "Unity, ROS, C#, Realtime",
    },
    {
      name: "Design and Additive Manufacturing",
      details: "FDM workflow optimization, slicer tuning, and functional prototyping across engineering-grade materials. Impact: Faster prototyping cycles with more robust mechanical iterations.",
      stack: "CAD, FDM, Materials, Rapid Prototyping",
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
      title: "Software and AI",
      values: "Python, C/C++, ROS/ROS2, PyTorch, TensorFlow, OpenCV, MATLAB, Simulink, C#, JavaScript, Backend APIs, Web interfaces",
    },
    {
      title: "Robotics and Embedded",
      values: "CAN Bus, FlexRay, Sensor Fusion, SLAM, PCB Design, Arduino, STM32, Raspberry Pi, Low-level Control, I2C/SPI/UART, PX4, Real-time Protocols",
    },
    {
      title: "Tooling and Delivery",
      values: "Docker, Linux, Git, Grafana, Fusion 360, Solid Edge, Blender, LabVIEW, Unity, Gazebo/Webots, n8n automation, System debugging",
    },
  ],
  
  certificationGroups: [
    {
      title: "Achievements",
      items: [
        "Master Thesis: Vehicle Immersion System (2025) - Immersive VR interaction platform for autonomous and teleoperated vehicle workflows",
        "Final Degree Thesis: Miniature Autonomous Vehicle (2023) - End-to-end design and implementation of a working miniature autonomous mobility system",
        "1st Place - ASTI Robotics Competition (2019) - Awarded for robotics innovation, implementation quality, and technical execution",
        "Young Researchers Finalist (Complutense) - Recognized for technical research contribution and experimental rigor",
      ],
    },
    {
      title: "Capability Signals",
      items: [
        "LiDAR and Camera Detection (92%)",
        "Sensor Calibration and Synchronization (90%)",
        "ROS2 and Real-time Integration (93%)",
        "CAN/FlexRay and Low-level Comms (88%)",
        "System Validation and Observability (89%)",
        "Technical Leadership and Execution (86%)",
      ],
    },
    {
      title: "Drone Operations (EASA)",
      items: ["A1/A3", "A2", "STS-01", "STS-02", "UAS Operator", "Radio Operator"],
    },
    {
      title: "Technical and Software Certifications",
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
