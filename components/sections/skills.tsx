"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      id="skills"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#0A0B0E",
        borderBottom: "1px solid #1E212B",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="SYSTEM ARCHITECTURE"
          title="Technical Capabilities & Toolchain"
          description="A specialized toolkit focused on backend reliability, asynchronous task pipelines, and modern web application development."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.25fr 1fr" },
            gap: 3,
          }}
        >
          {/* ========================================================================= */}
          {/* FEATURED BLOCK: Backend & Distributed Systems (Large Prominent Showcase) */}
          {/* ========================================================================= */}
          <MotionBox
            variants={itemVariants}
            sx={{
              backgroundColor: "#101218",
              border: "1px solid #202430",
              borderRadius: "8px",
              p: { xs: 3, md: 4.5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.2s ease",
              "&:hover": {
                borderColor: "#E87A1E",
              },
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "6px",
                      backgroundColor: "#1B1E2B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StorageIcon sx={{ fontSize: 20, color: "#E87A1E" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.825rem",
                      fontWeight: 700,
                      color: "#F4F4F6",
                      letterSpacing: "0.05em",
                    }}
                  >
                    01 // BACKEND & DISTRIBUTED SYSTEMS
                  </Typography>
                </Box>

                <Box
                  sx={{
                    px: 1.25,
                    py: 0.35,
                    backgroundColor: "#161922",
                    border: "1px solid #262B3A",
                    borderRadius: "4px",
                  }}
                >
                  <Typography sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.7rem", color: "#E87A1E", fontWeight: 700 }}>
                    PRIMARY SPECIALIZATION
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ fontSize: "0.95rem", color: "#8E92A0", lineHeight: 1.65, mb: 3.5 }}>
                Designing scalable server architectures with NestJS and Express. Managing background job processing concurrency via Redis and BullMQ, implementing low-latency RESTful APIs, and building real-time event streaming with GraphQL Subscriptions.
              </Typography>

              {/* Structured Skills Grid */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.5, mb: 3.5 }}>
                {[
                  { name: "Node.js & NestJS", desc: "Modular IoC architecture & DTO validation" },
                  { name: "Redis & BullMQ", desc: "Asynchronous task queue dispatch" },
                  { name: "REST APIs & Swagger", desc: "Defensive endpoint design & schema docs" },
                  { name: "GraphQL & Subscriptions", desc: "Real-time websocket event pub/sub" },
                  { name: "Express.js Core", desc: "Lightweight middleware pipelines" },
                  { name: "Microservices Patterns", desc: "Service decoupling & message passing" },
                ].map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      p: 1.5,
                      backgroundColor: "#0A0C10",
                      border: "1px solid #1E222E",
                      borderRadius: "5px",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        borderColor: "#E87A1E",
                        backgroundColor: "#141720",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                      <Box sx={{ width: 5, height: 5, backgroundColor: "#E87A1E", borderRadius: "1px" }} />
                      <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#F4F4F6" }}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.75rem", color: "#8E92A0", lineHeight: 1.4 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                pt: 2.5,
                borderTop: "1px solid #1E222E",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.72rem", color: "#8E92A0" }}>
                BENCHMARK: SUB-50MS API RESPONSE TARGETS
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.72rem", color: "#10B981", fontWeight: 600 }}>
                NON-BLOCKING I/O
              </Typography>
            </Box>
          </MotionBox>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: 3 Staggered Capability Blocks */}
          {/* ========================================================================= */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Block 2: Database & Tenancy */}
            <MotionBox
              variants={itemVariants}
              sx={{
                backgroundColor: "#101218",
                border: "1px solid #202430",
                borderRadius: "8px",
                p: { xs: 2.5, md: 3 },
                transition: "border-color 0.2s ease",
                "&:hover": {
                  borderColor: "#E87A1E",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "4px",
                    backgroundColor: "#1B1E2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TerminalIcon sx={{ fontSize: 18, color: "#E87A1E" }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#F4F4F6",
                    letterSpacing: "0.04em",
                  }}
                >
                  02 // DATABASE & CLOUD INFRASTRUCTURE
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "0.85rem", color: "#8E92A0", lineHeight: 1.55, mb: 2 }}>
                Relational schema modeling and NoSQL document design. Multi-tenant database tenancy isolation, index optimization, and containerized deployment.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {["PostgreSQL", "MongoDB", "Supabase", "MySQL", "Docker", "Railway", "Vercel"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      backgroundColor: "#0A0C10",
                      border: "1px solid #1E222E",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#F4F4F6",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </MotionBox>

            {/* Block 3: Frontend & Web Interfaces */}
            <MotionBox
              variants={itemVariants}
              sx={{
                backgroundColor: "#101218",
                border: "1px solid #202430",
                borderRadius: "8px",
                p: { xs: 2.5, md: 3 },
                transition: "border-color 0.2s ease",
                "&:hover": {
                  borderColor: "#E87A1E",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "4px",
                    backgroundColor: "#1B1E2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WebIcon sx={{ fontSize: 18, color: "#E87A1E" }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#F4F4F6",
                    letterSpacing: "0.04em",
                  }}
                >
                  03 // FRONTEND & REACT ECOSYSTEM
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "0.85rem", color: "#8E92A0", lineHeight: 1.55, mb: 2 }}>
                Server-rendered applications, type-safe data fetching, and accessible interfaces built with Next.js App Router, React 19, and Tailwind CSS.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Material UI", "State Flows"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      backgroundColor: "#0A0C10",
                      border: "1px solid #1E222E",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#F4F4F6",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </MotionBox>

            {/* Block 4: Integrations & API Protocols */}
            <MotionBox
              variants={itemVariants}
              sx={{
                backgroundColor: "#101218",
                border: "1px solid #202430",
                borderRadius: "8px",
                p: { xs: 2.5, md: 3 },
                transition: "border-color 0.2s ease",
                "&:hover": {
                  borderColor: "#E87A1E",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "4px",
                    backgroundColor: "#1B1E2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IntegrationInstructionsIcon sx={{ fontSize: 18, color: "#E87A1E" }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#F4F4F6",
                    letterSpacing: "0.04em",
                  }}
                >
                  04 // SYSTEMS & THIRD-PARTY INTEGRATIONS
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "0.85rem", color: "#8E92A0", lineHeight: 1.55, mb: 2 }}>
                Real-time LLM token streaming via SSE, Razorpay checkout webhook verification, JWT & RBAC security, Postman test suites, and Git CI/CD.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {["LLM Token Streaming", "Razorpay Webhooks", "JWT & RBAC Auth", "Postman", "Git / GitHub"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      backgroundColor: "#0A0C10",
                      border: "1px solid #1E222E",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#F4F4F6",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
