import type { SvgIconComponent } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SpeedIcon from "@mui/icons-material/Speed";
import BugReportIcon from "@mui/icons-material/BugReport";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export interface SocialLink {
  name: string;
  url: string;
  icon: SvgIconComponent;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: SvgIconComponent;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const DEVELOPER_INFO = {
  name: "Sayyed Amaan Ali",
  title: "Junior Full Stack Developer",
  email: "sayyedamaanali164@gmail.com",
  intro:
    "Passionate about building scalable, modern web applications that deliver exceptional user experiences. Specializing in React, Next.js, Nest.js and Node.js ecosystems with a focus on clean code and performance optimization.",
  about:
    "I'm a self-driven full stack developer with hands-on experience building real-world applications for startups and freelance clients. My journey began with curiosity about how websites work, and it evolved into a passion for creating seamless digital experiences. I thrive on turning complex problems into elegant, user-friendly solutions.",
  location: "Udaipur, Rajasthan, India",
  availability: "Available for Freelance & FullTime Role",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sayyedali2", icon: GitHubIcon },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sayyed-aman-ali-67b716287/",
    icon: LinkedInIcon,
  },
  { name: "Email", url: "sayyedamaanali164@gmail.com", icon: EmailIcon },
  { name: "X", url: "https://x.com/SayyedAmaa61549", icon: XIcon },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: WebIcon,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Material UI", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: StorageIcon,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "NestJS", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: StorageIcon,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: BuildIcon,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Postman", level: 85 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Sales CRM SaaS",
    description:
      "A multi-tenant SaaS platform designed for companies to efficiently manage sales workflows, track leads, and automate email sequences through a centralized dashboard.",
    features: [
      "Multi-tenant architecture",
      "Lead & sales pipeline management",
      "Automated email sequences",
      "Workforce tracking dashboard",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "Material UI",
    ],
    image: "/salseProject.png",
    liveUrl: "https://salse-crm.vercel.app/",
    githubUrl: "https://github.com/sayyedali2/salse_crm",
    category: ["Full Stack", "SaaS"],
  },
  {
    id: "2",
    title: "Secure Election Simulator",
    description:
      "A highly secure web-based simulation platform incorporating multi-layered security protocols to prevent exploitation and ensure fair gameplay.",
    features: [
      "Multi-layered security system",
      "Device fingerprinting",
      "IP tracking & management",
      "Behavioral analysis to prevent multi-accounts",
    ],
    techStack: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/sayyedali2/election_game_frontend",
    category: ["Full Stack", "Freelance"],
  },
  {
    id: "3",
    title: "AI Technical Screener",
    description:
      "An AI-integrated recruitment tool utilizing real-time API streaming to automate technical screening rounds and streamline the candidate evaluation process.",
    features: [
      "Automated technical interviews",
      "Real-time AI response streaming",
      "Candidate evaluation metrics",
      "Recruiter management dashboard",
    ],
    techStack: ["Next.js", "NestJS", "TypeScript", "Gemini API", "MongoDB"],
    image: "/screeingProject.png",
    liveUrl: "https://ai-powered-technical-screening-micr.vercel.app/",
    githubUrl: "https://github.com/sayyedali2/ai-powered-technical-screening-micro-saas",
    category: ["Full Stack", "SaaS"],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full Stack",
  "Frontend",
  "Freelance",
  "SaaS",
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Jr Fullstack developer Intern",
    company: "Infotact Solution pvt ldt.",
    period: "25 April 2025 - 25 july 2025",
    description:
      "​Designed and implemented responsive full-stack applications using React and Node.js, Express.js.",
    achievements: [
      "Implemented E-commerce Website projects for client",
      "Maintained 100% client satisfaction rate with repeat customers",
      "Specialized in React/Next.js frontends with Node.js backends",
    ],
  },
  {
    id: "2",
    title: " FullStack Developer Intern",
    company: "Burak Information & Technologies",
    period: "1 Aug 2025 - 30 Nov 2025",
    description:
      "Contributed to the development of web applications in a fast-paced startup environment.",
    achievements: [
      "Developed and maintained features for company",
      "Collaborated with senior developers on architecture decisions",
      "Reduced page load times by 40% through performance optimization",
      "Participated in code reviews and agile development processes",
    ],
  },
  {
    id: "3",
    title: "FullStack Developer Intern",
    company: "Websenor Pvt Ldt.",
    period: "15 Dec 2025 - 16 March 2026",
    description:
      "Architected a multi-tenant Sales CRM that automated 70% of the passive sales workflow, significantly reducing manual data entry for the team.",
    achievements: [
      "Executed Real-Time Data Synchronization using GraphQL Subscriptions, ensuring instant updates for leads and team activities across the dashboard.",
      "Learned industry best practices for code quality and documentation",
      "Assisted in migrating legacy projects to modern tech stacks",
      "Contributed to internal tools development",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development with modern technologies, from database design to deployment.",
    icon: CodeIcon,
  },
  {
    title: "Frontend Development",
    description:
      "Beautiful, responsive, and performant user interfaces using React, Next.js, and modern CSS frameworks.",
    icon: WebIcon,
  },
  {
    title: "Backend API Development",
    description:
      "Scalable RESTful APIs and GraphQL services with Node.js, Express, and database integration.",
    icon: StorageIcon,
  },
  {
    title: "Dashboard & Admin Panels",
    description:
      "Custom admin dashboards with data visualization, user management, and analytics features.",
    icon: DashboardIcon,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages with stunning animations, SEO optimization, and fast load times.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Bug Fixing & Optimization",
    description:
      "Debugging, performance optimization, and code refactoring for existing applications.",
    icon: BugReportIcon,
  },
  {
    title: "Website Optimization",
    description:
      "Performance audits, Core Web Vitals improvements, and SEO enhancements for better rankings.",
    icon: SpeedIcon,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Founder",
    company: "StartupFlow",
    content:
      "Amaan delivered our MVP ahead of schedule with exceptional quality. The communication was outstanding, and the code is clean and well-documented. Highly recommend!",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Torres",
    role: "Product Manager",
    company: "TechVentures",
    content:
      "Working with Amaan was a pleasure. Fast delivery, clean UI, and great attention to detail. Our dashboard looks amazing and performs flawlessly.",
    avatar: "/avatars/michael.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "CEO",
    company: "DigitalFirst Agency",
    content:
      "Professional, responsive, and delivers exactly what was promised. Amaan transformed our outdated website into a modern, high-converting platform.",
    avatar: "/avatars/emily.jpg",
    rating: 5,
  },
  {
    id: "4",
    name: "David Park",
    role: "CTO",
    company: "InnovateTech",
    content:
      "Amaan technical skills are impressive, but what sets them apart is the ability to understand business requirements and translate them into elegant solutions.",
    avatar: "/avatars/david.jpg",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
