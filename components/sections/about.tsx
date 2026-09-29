"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { DEVELOPER_INFO } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

interface SkillCategory {
  title: string;
  layer: string;
  icon: typeof StorageIcon;
  description: string;
  skills: { name: string; featured?: boolean }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    layer: "01 // BACKEND",
    icon: StorageIcon,
    description:
      "Building APIs, handling business logic, and managing background tasks and data processing.",
    skills: [
      { name: "Node.js", featured: true },
      { name: "NestJS", featured: true },
      { name: "Express.js" },
      { name: "BullMQ", featured: true },
      { name: "Redis", featured: true },
      { name: "REST APIs" },
      { name: "GraphQL & Subscriptions" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Frontend Development",
    layer: "02 // FRONTEND",
    icon: WebIcon,
    description:
      "Building responsive interfaces, reusable components, and interactive web experiences.",
    skills: [
      { name: "Next.js", featured: true },
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "WebSockets" },
      { name: "Responsive UI" },
    ],
  },
  {
    title: "Databases & Storage",
    layer: "03 // DATABASES",
    icon: TerminalIcon,
    description:
      "Working with relational and document databases, data models, caching, and application storage.",
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MongoDB", featured: true },
      { name: "Prisma ORM", featured: true },
      { name: "Redis" },
      { name: "Supabase" },
      { name: "MySQL" },
    ],
  },
  {
    title: "Integrations & Tools",
    layer: "04 // TOOLS & INTEGRATIONS",
    icon: IntegrationInstructionsIcon,
    description:
      "Working with third-party services, authentication, APIs, development tools, and deployment platforms.",
    skills: [
      { name: "Gemini & Groq APIs", featured: true },
      { name: "Razorpay", featured: true },
      { name: "JWT & RBAC" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Linux / VPS" },
      { name: "Vercel & Railway" },
    ],
  },
];

const ENGINEERING_SPECS = [
  {
    label: "ROLE",
    value: "Full-Stack Developer",
    detail: "Building complete web applications from frontend to backend",
  },
  {
    label: "CORE TECH STACK",
    value: "Node.js • NestJS • Next.js • TypeScript",
    detail: "Modern JavaScript and TypeScript across the stack",
  },
  {
    label: "WHAT I BUILD",
    value: "Web Apps • SaaS • AI Products",
    detail: "Practical products with APIs, databases, integrations, and modern interfaces",
  },
  {
    label: "CURRENT STATUS",
    value: "Open for Full-Time & Select Contracts",
    detail: `${DEVELOPER_INFO.location} • Remote Worldwide`,
    statusDot: true,
  },
];
const PRINCIPLES = [
  {
    number: "01",
    tag: "UNDERSTAND THE PROBLEM",
    title: "Start With the Why",
    description:
      "I first understand the problem, requirements, and how the product will be used before deciding how to build it.",
  },
  {
    number: "02",
    tag: "BUILD FOR REAL USE",
    title: "Keep Things Practical",
    description:
      "I focus on building features that are useful, reliable, and simple to maintain rather than adding complexity without a clear purpose.",
  },
  {
    number: "03",
    tag: "END-TO-END THINKING",
    title: "Consider the Whole Product",
    description:
      "I look at how the frontend, backend, database, integrations, and user experience work together to create a complete product.",
  },
];

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="ABOUT"
          title="Building with intent and architectural clarity"
          description="A structured overview of how I design, develop, and deliver resilient web applications from data models to intuitive user interfaces."
        />

        {/* 1. Bio Narrative + Engineering Profile Spec Card */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.15 }}
          sx={{ mb: { xs: 10, md: 14 } }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
              gap: { xs: 6, lg: 8 },
              alignItems: "stretch",
            }}
          >
            {/* Left: Punchy Narrative (No wall of text) */}
            <MotionBox
              variants={itemVariants}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "1.35rem", sm: "1.5rem", md: "1.75rem" },
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.5,
                    letterSpacing: "-0.015em",
                    mb: 3,
                  }}
                >
                  I bridge the gap between{" "}
                  <Box
                    component="span"
                    sx={{ color: "#E87A1E", fontWeight: 500 }}
                  >
                    resilient backend architecture
                  </Box>{" "}
                  and clean, intuitive frontend execution.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    color: "#A1A1AA",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  I’m Sayyed Amaan Ali, a full-stack engineer who builds
                  multi-tenant SaaS platforms, asynchronous task queues, and
                  real-time web systems. I enjoy taking an idea from initial
                  schema modeling to a high-concurrency production deployment.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    color: "#A1A1AA",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  My work centers around making software dependable: isolating
                  tenant data securely, decoupling spike-heavy workloads with
                  BullMQ &amp; Redis, and delivering responsive Next.js
                  interfaces with end-to-end type safety.
                </Typography>
              </Box>

              {/* Status Pill Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: "999px",
                  backgroundColor: "#0D0E12",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#E87A1E",
                    boxShadow: "0 0 10px rgba(232, 122, 30, 0.7)",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.875rem",
                    color: "#FFFFFF",
                    fontWeight: 400,
                  }}
                >
                  {DEVELOPER_INFO.location} • Open for Opportunities
                </Typography>
              </Box>
            </MotionBox>

            {/* Right: Structured Developer Specs Grid */}
            <MotionBox variants={itemVariants}>
              <Box
                sx={{
                  height: "100%",
                  backgroundColor: "#0D0E12",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  p: { xs: 3.5, sm: 4.5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: 2.5,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "#E87A1E",
                      textTransform: "uppercase",
                    }}
                  >
                    ENGINEERING PROFILE
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.75rem",
                      color: "#6B7280",
                      letterSpacing: "0.05em",
                    }}
                  >
                    VERIFIED SPEC SHEET
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 3,
                  }}
                >
                  {ENGINEERING_SPECS.map((spec) => (
                    <Box
                      key={spec.label}
                      sx={{
                        pb: 2.5,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        "&:last-child": {
                          borderBottom: "none",
                          pb: 0,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          color: "#9E9E9E",
                          textTransform: "uppercase",
                          mb: 0.5,
                        }}
                      >
                        {spec.label}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.25,
                          mb: 0.5,
                        }}
                      >
                        {spec.statusDot && (
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              backgroundColor: "#E87A1E",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "1.0625rem",
                            fontWeight: 500,
                            color: "#FFFFFF",
                          }}
                        >
                          {spec.value}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.8125rem",
                          color: "#71717A",
                          lineHeight: 1.5,
                        }}
                      >
                        {spec.detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </MotionBox>

        {/* 2. Categorized Technical Arsenal (Replacing the messy skills dump) */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.15 }}
          sx={{ mb: { xs: 12, md: 16 } }}
        >
          {/* Section Sub-header */}
          <MotionBox variants={itemVariants} sx={{ mb: 6 }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#E87A1E",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              TECH STACK
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "1.75rem", sm: "2.25rem" },
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Technologies organized by category
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9375rem",
                color: "#9E9E9E",
                maxWidth: 680,
                lineHeight: 1.6,
              }}
            >
              Grouped by category, with my most-used technologies highlighted.
            </Typography>
          </MotionBox>

          {/* 4 Categorized Cards Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3.5, md: 4.5 },
            }}
          >
            {SKILL_CATEGORIES.map((category) => {
              const IconComponent = category.icon;
              return (
                <MotionBox
                  key={category.title}
                  variants={itemVariants}
                  sx={{
                    backgroundColor: "#0D0E12",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    p: { xs: 3.5, sm: 4.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    "&:hover": {
                      borderColor: "rgba(232, 122, 30, 0.5)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 3.5 }}>
                    {/* Header Row: Layer & Icon */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          color: "#E87A1E",
                          textTransform: "uppercase",
                        }}
                      >
                        {category.layer}
                      </Typography>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "8px",
                          backgroundColor: "rgba(232, 122, 30, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#E87A1E",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 20 }} />
                      </Box>
                    </Box>

                    {/* Category Title */}
                    <Typography
                      component="h4"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: "1.25rem", sm: "1.375rem" },
                        fontWeight: 500,
                        color: "#FFFFFF",
                        mb: 1,
                      }}
                    >
                      {category.title}
                    </Typography>

                    {/* Category Description */}
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.875rem",
                        color: "#9E9E9E",
                        lineHeight: 1.6,
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Box>

                  {/* Badges Container */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.25,
                      pt: 2.5,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {category.skills.map((skill) => (
                      <Box
                        key={skill.name}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          px: 2,
                          py: 0.85,
                          borderRadius: "999px",
                          backgroundColor: "#13151C",
                          border: skill.featured
                            ? "1px solid rgba(232, 122, 30, 0.45)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            borderColor: "#E87A1E",
                            transform: "translateY(-2px)",
                            backgroundColor: "#171922",
                          },
                        }}
                      >
                        {skill.featured && (
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "#E87A1E",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: skill.featured ? 500 : 400,
                            color: skill.featured ? "#FFFFFF" : "#D4D4D8",
                            letterSpacing: "0.01em",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </MotionBox>
              );
            })}
          </Box>
        </MotionBox>

        {/* 3. Engineering Tenets / How I Build Software */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.15 }}
        >
          {/* Sub-header */}
          <MotionBox variants={itemVariants} sx={{ mb: 6 }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#E87A1E",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              HOW I BUILD SOFTWARE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "1.75rem", sm: "2.25rem" },
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Core engineering principles
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9375rem",
                color: "#9E9E9E",
                maxWidth: 680,
                lineHeight: 1.6,
              }}
            >
            How I approach problems, make technical decisions, and build products that are practical and reliable.
            </Typography>
          </MotionBox>

          {/* 3-Column Tenet Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 3.5, md: 4 },
            }}
          >
            {PRINCIPLES.map((principle) => (
              <MotionBox
                key={principle.number}
                variants={itemVariants}
                sx={{
                  backgroundColor: "#0D0E12",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                  p: { xs: 3.5, sm: 4.5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  "&:hover": {
                    borderColor: "rgba(232, 122, 30, 0.4)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box>
                  {/* Step Tag */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: "#E87A1E",
                        lineHeight: 1,
                      }}
                    >
                      {principle.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        color: "#71717A",
                        textTransform: "uppercase",
                      }}
                    >
                      {principle.tag}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    component="h4"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.1875rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    {principle.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.875rem",
                      color: "#9E9E9E",
                      lineHeight: 1.7,
                    }}
                  >
                    {principle.description}
                  </Typography>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
