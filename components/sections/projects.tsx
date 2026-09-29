"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PROJECTS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Projects() {
  const projectCardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      id="work"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <span id="projects" style={{ position: "relative", top: "-100px", display: "block" }} />
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="SELECTED WORK"
          title="Recent systems that deliver real-world impact"
          description="Production-grade applications engineered with high throughput, multi-tenant isolation, and resilient background queue workers."
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 12, md: 16 } }}>
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <MotionBox
                key={project.id}
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -120px 0px", amount: 0.18 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "1.05fr 1.15fr" },
                  gap: { xs: 5, md: 8, lg: 10 },
                  alignItems: "center",
                  pb: index !== PROJECTS.length - 1 ? { xs: 10, md: 14 } : 0,
                  borderBottom:
                    index !== PROJECTS.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "none",
                }}
              >
                {/* Information Column (Alternates order on desktop for editorial rhythm) */}
                <Box
                  sx={{
                    order: { xs: 2, lg: isEven ? 2 : 1 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Category & Number Eyebrow */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
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
                      {project.number} // {project.category}
                    </Typography>
                  </Box>

                  {/* Project Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "1.875rem", sm: "2.25rem", md: "2.75rem" },
                      fontWeight: 400, // Signature Afterglow regular weight
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Tagline / Context */}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "1rem", md: "1.0625rem" },
                      fontWeight: 500,
                      color: "#E87A1E",
                      lineHeight: 1.6,
                      mb: 2.5,
                    }}
                  >
                    {project.tagline}
                  </Typography>

                  {/* Problem & Solution Description */}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#A1A1AA",
                      lineHeight: 1.75,
                      mb: 3.5,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Architecture & Engineering Highlights */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        mb: 2,
                      }}
                    >
                      Key Architectural Highlights
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        p: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.25,
                      }}
                    >
                      {project.architectureHighlights.map((highlight, hIdx) => (
                        <Box
                          component="li"
                          key={hIdx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "#E87A1E",
                              mt: 0.9,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "0.875rem",
                              color: "#D4D4D8",
                              lineHeight: 1.6,
                            }}
                          >
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Prominent & Highly Visible Technology Badges */}
                  <Box sx={{ mb: 4.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: "#E87A1E",
                        textTransform: "uppercase",
                        mb: 2,
                      }}
                    >
                      Built With
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                      {project.techStack.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.75,
                            borderRadius: 999,
                            backgroundColor: "#12141C",
                            border: "1px solid rgba(255, 255, 255, 0.14)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: "#E87A1E",
                              backgroundColor: "rgba(232, 122, 30, 0.08)",
                              transform: "translateY(-1px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              backgroundColor: "#E87A1E",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "0.8125rem",
                              color: "#FFFFFF",
                              fontWeight: 500,
                              letterSpacing: "0.01em",
                            }}
                          >
                            {tech}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Action Buttons Row */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        backgroundColor: "#E87A1E",
                        color: "#000000",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        px: 3.5,
                        py: 1.5,
                        borderRadius: 999,
                        boxShadow: "none",
                        textTransform: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "#D16B15",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Live Application
                    </Button>

                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        color: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        px: 3.5,
                        py: 1.5,
                        borderRadius: 999,
                        textTransform: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#FFFFFF",
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                        },
                      }}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>

                {/* Visual Showcase Mockup Column */}
                <Box
                  sx={{
                    order: { xs: 1, lg: isEven ? 1 : 2 },
                  }}
                >
                  <Box
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      position: "relative",
                      width: "100%",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backgroundColor: "#0E1015",
                      transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                      cursor: "pointer",
                      "&:hover": {
                        borderColor: "rgba(232, 122, 30, 0.6)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
                        "& .browser-url": {
                          borderColor: "rgba(232, 122, 30, 0.4)",
                          color: "#FFFFFF",
                        },
                        "& img": {
                          transform: "scale(1.025)",
                        },
                      },
                    }}
                  >
                    {/* Browser Chrome Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 2.5,
                        py: 1.25,
                        backgroundColor: "#0A0B0E",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {/* Window Controls */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.9 }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#262832",
                          }}
                        />
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#262832",
                          }}
                        />
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#262832",
                          }}
                        />
                      </Box>

                      {/* URL Bar */}
                      <Box
                        className="browser-url"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          px: 2.5,
                          py: 0.4,
                          borderRadius: 999,
                          backgroundColor: "#13151D",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#E87A1E",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.75rem",
                            color: "#A1A1AA",
                          }}
                        >
                          {project.liveUrl.replace("https://", "")}
                        </Typography>
                      </Box>

                      {/* External Link Indicator */}
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LaunchIcon sx={{ fontSize: 15, color: "#71717A" }} />
                      </Box>
                    </Box>

                    {/* Screenshot Container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 260, sm: 380, md: 440, lg: 480 },
                        backgroundColor: "#07080A",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1200px) 100vw, 800px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
