"use client";

import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category.includes(activeFilter));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Box
      id="projects"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
          description="A showcase of my recent work, demonstrating expertise in full-stack development"
        />

        {/* Filter Buttons */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 6,
          }}
        >
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 3,
                fontWeight: 500,
                fontSize: "0.875rem",
                color: activeFilter === category ? "white" : "text.secondary",
                bgcolor:
                  activeFilter === category
                    ? "transparent"
                    : "rgba(18, 18, 26, 0.6)",
                background:
                  activeFilter === category
                    ? "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)"
                    : undefined,
                border: "1px solid",
                borderColor:
                  activeFilter === category
                    ? "transparent"
                    : "rgba(139, 92, 246, 0.2)",
                "&:hover": {
                  bgcolor: "rgba(139, 92, 246, 0.2)",
                  borderColor: "rgba(139, 92, 246, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {category}
            </Button>
          ))}
        </MotionBox>

        {/* Projects Grid */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <Grid key={project.id} size={{ xs: 12, md: 6 }}>
                  <MotionBox
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        overflow: "hidden",
                        bgcolor: "rgba(18, 18, 26, 0.6)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(139, 92, 246, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(139, 92, 246, 0.3)",
                          boxShadow:
                            "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)",
                        },
                      }}
                    >
                      {/* Project Image/Placeholder */}
                      <Box
                        sx={{
                          position: "relative",
                          height: 200,
                          background: `linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        {/* Animated gradient background */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(45deg, 
                              rgba(139, 92, 246, 0.3) 0%, 
                              rgba(6, 182, 212, 0.2) 50%,
                              rgba(139, 92, 246, 0.3) 100%)`,
                            backgroundSize: "200% 200%",
                            animation: "gradientShift 5s ease infinite",
                            "@keyframes gradientShift": {
                              "0%": { backgroundPosition: "0% 50%" },
                              "50%": { backgroundPosition: "100% 50%" },
                              "100%": { backgroundPosition: "0% 50%" },
                            },
                          }}
                        />

                        {project.image ? (
                          <img src={project.image} />
                        ) : (
                          <Typography
                            variant="h4"
                            sx={{
                              position: "relative",
                              fontWeight: 700,
                              color: "white",
                              opacity: 0.5,
                              letterSpacing: 2,
                            }}
                          >
                            {project.title.substring(0, 2).toUpperCase()}
                          </Typography>
                        )}

                        {/* Hover overlay with buttons */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live demo"
                            sx={{
                              bgcolor: "rgba(139, 92, 246, 0.2)",
                              border: "1px solid #8B5CF6",
                              color: "#8B5CF6",
                              "&:hover": {
                                bgcolor: "#8B5CF6",
                                color: "white",
                              },
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                            sx={{
                              bgcolor: "rgba(6, 182, 212, 0.2)",
                              border: "1px solid #06B6D4",
                              color: "#06B6D4",
                              "&:hover": {
                                bgcolor: "#06B6D4",
                                color: "white",
                              },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Project Content */}
                      <Box
                        sx={{
                          p: 3,
                          maxWidth: "100%",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          overflow: "visible",
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            fontSize: "1.25rem",
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 2,
                            lineHeight: 1.7,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Features */}
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ mb: 2, flexWrap: "wrap", width: "100%" }}
                        >
                          {project.features.slice(0, 3).map((feature) => (
                            <Chip
                              key={feature}
                              label={feature}
                              size="small"
                              sx={{
                                bgcolor: "rgba(139, 92, 246, 0.1)",
                                color: "#A78BFA",
                                fontSize: "0.7rem",
                                //  flexShrink:0
                              }}
                            />
                          ))}
                        </Stack>

                        {/* Tech Stack */}
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ flexWrap: "wrap", width: "100%" }}
                        >
                          {project.techStack.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: "rgba(6, 182, 212, 0.3)",
                                color: "#06B6D4",
                                fontSize: "0.7rem",
                                height: 24,
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  </MotionBox>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
