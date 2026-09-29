import type { SvgIconComponent } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

export interface SocialLink {
  name: string;
  url: string;
  icon: SvgIconComponent;
}

export interface SkillItem {
  name: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  icon: SvgIconComponent;
  items: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  role: string;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const DEVELOPER_INFO = {
  name: "Sayyed Amaan Ali",
  eyebrow: "FULL-STACK DEVELOPER",
  title: "Full-Stack Developer",
  headline: "Building modern web applications that solve real problems.",
  email: "sayyedamaanali164@gmail.com",
  intro:
    "I build full-stack web applications using Node.js, NestJS, Next.js, TypeScript, databases, APIs, and modern development tools. I enjoy turning ideas into useful products and solving the technical challenges that come with building them.",
  about:
    "I am a Full-Stack Developer with hands-on experience building web applications and AI-powered products. I work across the frontend and backend, building APIs and business logic with Node.js and NestJS, working with databases such as PostgreSQL and MongoDB, and creating modern interfaces with Next.js and TypeScript. I also work with background jobs, third-party integrations, authentication, and other parts of the application needed to turn an idea into a complete working product.",
  location: "Udaipur, Rajasthan, India",
  availability: "Available for Full-Time Roles & Selected Contracts",
  philosophy: [
    {
      title: "Understand Before Building",
      text: "I start by understanding the problem, requirements, and data flow before deciding how the application should be built.",
    },
    {
      title: "Build for Real Use",
      text: "I focus on creating applications that are reliable, practical, and easy for people to use in real-world situations.",
    },
    {
      title: "End-to-End Development",
      text: "I work across the frontend and backend, from databases, APIs, and authentication to user interfaces, integrations, and deployment.",
    },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sayyedali2", icon: GitHubIcon },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sayyed-aman-ali-67b716287/",
    icon: LinkedInIcon,
  },
  { name: "X", url: "https://x.com/SayyedAmaa61549", icon: XIcon },
  { name: "Email", url: "mailto:sayyedamaanali164@gmail.com", icon: EmailIcon },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    category: "Backend & Systems",
    description: "Server architectures, data pipelines, queue workers, and API layers.",
    icon: StorageIcon,
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL & Subscriptions",
      "Redis",
      "BullMQ",
      "Microservices",
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Interfaces",
    description: "Type-safe interfaces, state flows, and responsive design systems.",
    icon: WebIcon,
    items: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "HTML5 / CSS3",
      "Responsive Layouts",
    ],
  },
  {
    id: "database",
    category: "Database & Cloud",
    description: "Schema modeling, relational & document databases, and host infrastructure.",
    icon: TerminalIcon,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "MySQL",
      "Docker Basics",
      "Railway",
      "Vercel",
    ],
  },
  {
    id: "workflows",
    category: "Workflows & Integrations",
    description: "Third-party APIs, streaming pipelines, auth standards, and dev toolchains.",
    icon: IntegrationInstructionsIcon,
    items: [
      "LLM Streaming (Gemini / Groq)",
      "Razorpay Payments",
      "JWT & RBAC Auth",
      "Git & GitHub Workflows",
      "Postman API Testing",
      "Environment Security",
    ],
  },
];

export const PROJECTS: Project[] = [
{
  id: "sales-crm",
  number: "01",
  title: "Sales CRM SaaS",
  tagline: "Multi-tenant platform for managing sales, teams, and customer outreach",
  description:
    "A full-stack CRM application built to help sales teams manage leads, track team activity, organize sales workflows, and automate customer outreach from one place.",
  architectureHighlights: [
    "Multi-tenant architecture with isolated organization data",
    "Real-time updates using GraphQL subscriptions",
    "Automated email sequences for customer outreach",
    "Sales metrics and team activity tracking",
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
  role: "Full-Stack Developer",
  category: "Full Stack SaaS",
},
 {
  id: "prompt-optimizer",
  number: "02",
  title: "AI Prompt Optimizer",
  tagline: "AI-powered platform for improving and structuring user prompts",
  description:
    "A web application that transforms unclear prompts into more structured and effective instructions using multiple AI models. Built with background job processing to handle AI generation without blocking regular web requests.",
  architectureHighlights: [
    "Background job processing using BullMQ and Redis",
    "AI generation pipeline integrating Google Gemini and Groq",
    "Credit-based usage system with user profiles and quotas",
    "Razorpay checkout with secure webhook verification",
    "Supabase database with token-based authentication",
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "BullMQ",
    "Redis",
    "Gemini API",
    "Groq",
    "Razorpay",
  ],
  image: "/promptOptimizer.png",
  liveUrl: "https://prompt-improver-gules.vercel.app/",
  githubUrl: "https://github.com/sayyedali2/developer-portfolio",
  role: "Full-Stack Developer",
  category: "AI Application",
},
  {
  id: "technical-screener",
  number: "03",
  title: "AI Technical Screener",
  tagline: "AI-powered platform for conducting and evaluating technical interviews",
  description:
    "A recruitment screening application that conducts technical interviews using AI and generates structured evaluations for recruiters. The platform provides an interactive interview experience and organizes candidate responses into useful assessment data.",
  architectureHighlights: [
    "Real-time AI responses using Gemini API",
    "Structured candidate evaluation and scorecard generation",
    "Recruiter dashboard for managing candidates and interview sessions",
    "NestJS backend for handling interview and evaluation workflows",
  ],
  techStack: [
    "Next.js",
    "NestJS",
    "TypeScript",
    "Gemini API",
    "MongoDB",
  ],
  image: "/screeingProject.png",
  liveUrl: "https://ai-powered-technical-screening-micr.vercel.app/",
  githubUrl: "https://github.com/sayyedali2/ai-powered-technical-screening-micro-saas",
  role: "Full-Stack Developer",
  category: "AI Application",
},
];

export const EXPERIENCES: Experience[] = [
  {
    id: "websenor",
    title: "Full-Stack Developer Intern",
    company: "Websenor Pvt. Ltd.",
    period: "Dec 2025 - Mar 2026",
    location: "Udaipur, India",
    description:
      "Worked on full-stack features for commercial web applications, including a multi-tenant Sales CRM and related business workflows.",
    achievements: [
      "Developed backend features for a multi-tenant Sales CRM using NestJS, GraphQL, and MongoDB.",
      "Implemented real-time data updates using GraphQL subscriptions for lead and sales activity changes.",
      "Built frontend features with Next.js and connected them with backend APIs and business logic.",
      "Worked with the development team on feature implementation, debugging, code improvements, and documentation.",
    ],
    techStack: ["NestJS", "Next.js", "GraphQL", "MongoDB", "TypeScript"],
  },

  {
    id: "burak",
    title: "Full-Stack Developer Intern",
    company: "Burak Information & Technologies",
    period: "Aug 2025 - Nov 2025",
    location: "Udaipur, India",
    description:
      "Worked on web application features across the frontend and backend, with a focus on building reusable components and API integrations.",
    achievements: [
      "Developed frontend features using React and connected them with Node.js and Express APIs.",
      "Built reusable UI components for different application features and workflows.",
      "Worked with MongoDB for storing and retrieving application data.",
      "Participated in daily development tasks, debugging, code reviews, and team discussions.",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },

  {
    id: "infotact",
    title: "Jr. Full-Stack Developer Intern",
    company: "Infotact Solution Pvt. Ltd.",
    period: "Apr 2025 - Jul 2025",
    location: "Udaipur, India",
    description:
      "Worked on client web projects, building responsive interfaces and backend functionality for business applications.",
    achievements: [
      "Developed full-stack e-commerce features using React, Express, and MySQL.",
      "Implemented authentication, cart functionality, and product catalog features.",
      "Built responsive user interfaces and connected them with backend APIs.",
      "Worked on debugging, feature updates, and improving existing application functionality.",
    ],
    techStack: ["React", "Node.js", "Express.js", "MySQL", "JavaScript"],
  },
];

export const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Answers", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "STEP 1",
    title: "Understand the idea & requirements",
    description:
      "We start by understanding the problem, goals, users, and key requirements. This gives us a clear direction before development begins.",
  },

  {
    step: "STEP 2",
    title: "Plan the solution",
    description:
      "I break the requirements into features, plan the application structure, and decide how the frontend, backend, database, and integrations will work together.",
  },

  {
    step: "STEP 3",
    title: "Build the core functionality",
    description:
      "I develop the backend, APIs, database, and core business logic while building the main features needed to make the product work.",
  },

  {
    step: "STEP 4",
    title: "Build the interface & connect everything",
    description:
      "I create the frontend, connect it with the backend, and integrate the services the product needs. The goal is a complete and easy-to-use experience.",
  },

  {
    step: "STEP 5",
    title: "Test, deploy & improve",
    description:
      "I test the application, fix issues, deploy it, and make improvements based on how the product performs and what users need.",
  },
];

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Application Development",
    description:
      "Complete web applications built around your business needs, from frontend interfaces and backend APIs to databases, authentication, and integrations.",
    features: [
      "Full-stack development with Next.js and Node.js",
      "REST APIs and GraphQL",
      "Authentication and role-based access",
      "Third-party API and service integrations",
    ],
  },

  {
    number: "02",
    title: "Backend & API Development",
    description:
      "Reliable backend systems that handle business logic, data, authentication, background tasks, and the APIs your application needs.",
    features: [
      "Node.js and NestJS backend development",
      "REST APIs and GraphQL",
      "Background jobs with BullMQ and Redis",
      "Authentication, authorization, and business logic",
    ],
  },

  {
    number: "03",
    title: "SaaS & Business Applications",
    description:
      "Custom SaaS and business applications designed around real workflows, helping teams manage data, automate tasks, and bring different processes into one place.",
    features: [
      "Multi-tenant SaaS applications",
      "Team and role management",
      "Dashboards and business workflows",
      "Database design and application integrations",
    ],
  },

  {
    number: "04",
    title: "AI-Powered Applications",
    description:
      "Web applications that use AI to automate tasks, improve workflows, and create new product experiences using modern AI APIs and supporting backend systems.",
    features: [
      "AI features with Gemini and Groq",
      "Prompt processing and AI workflows",
      "Background processing for AI tasks",
      "AI integrations with existing applications",
    ],
  },
];

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export const METRICS: MetricItem[] = [
  {
    value: "3+",
    label: "Full-Stack Projects",
    description: "Built SaaS, AI, and business-focused web applications",
  },

  {
    value: "3",
    label: "AI-Powered Applications",
    description: "Built products using Gemini, Groq, and AI-driven workflows",
  },

  {
    value: "Full-Stack",
    label: "Development Experience",
    description: "Working across frontend, backend, databases, APIs, and integrations",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What kind of roles or projects are you open to?",
    answer:
      "I am open to full-time Full-Stack Developer roles, as well as selected contract and freelance projects involving web applications, SaaS products, and AI-powered applications.",
  },

  {
    question: "What technologies do you work with?",
    answer:
      "My main stack includes TypeScript, Node.js, NestJS, Next.js, React, PostgreSQL, MongoDB, and Redis. I also work with APIs, background jobs, authentication, AI APIs, and third-party integrations.",
  },

  {
    question: "Can you handle both frontend and backend development?",
    answer:
      "Yes. I work across the frontend and backend to build complete web applications. I use Next.js and React for interfaces, and Node.js and NestJS for APIs, business logic, databases, authentication, background processing, and integrations.",
  },

  {
    question: "Where are you located and how do you work?",
    answer:
      "I am based in Udaipur, Rajasthan, India (UTC+5:30). I am comfortable working remotely with clear communication, written updates, and regular coordination with teams and clients.",
  },
];

