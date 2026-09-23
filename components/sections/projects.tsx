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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Box
      id="projects"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 12, md: 16 },
        position: "relative",
        bgcolor: "var(--background)",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Selected Works"
          title="Featured Projects"
          description="A showcase of recent engineering work, demonstrating expertise in full-stack development."
        />

        {/* Filter Buttons */}
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 8,
          }}
        >
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              disableElevation
              sx={{
                px: 2.5,
                py: 0.75,
                borderRadius: "6px",
                fontWeight: 500,
                fontSize: "0.875rem",
                textTransform: "none",
                color: activeFilter === category ? "white" : "var(--muted-foreground)",
                bgcolor:
                  activeFilter === category
                    ? "var(--foreground)"
                    : "transparent",
                border: "1px solid",
                borderColor:
                  activeFilter === category
                    ? "var(--foreground)"
                    : "var(--border)",
                "&:hover": {
                  bgcolor: activeFilter === category ? "var(--foreground)" : "var(--secondary)",
                  borderColor: activeFilter === category ? "var(--foreground)" : "var(--border)",
                },
                transition: "all 0.2s ease",
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
              {filteredProjects.map((project, index) => (
                <Grid key={project.id} size={{ xs: 12, md: (index % 4 === 0 || index % 4 === 3) ? 7 : 5 }}>
                  <MotionBox
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                  >
                    <Box
                      sx={{
                        height: "100%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        bgcolor: "var(--card)",
                        border: "1px solid var(--border)",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                        "&:hover": {
                          borderColor: "var(--foreground)",
                          boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                          transform: "translateY(-2px)",
                        },
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: 260,
                          bgcolor: "var(--secondary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 600,
                              color: "var(--muted-foreground)",
                              opacity: 0.3,
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
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            backdropFilter: "blur(2px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            opacity: 0,
                            transition: "opacity 0.2s ease",
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
                              bgcolor: "var(--foreground)",
                              color: "white",
                              "&:hover": {
                                bgcolor: "black",
                              },
                            }}
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                            sx={{
                              bgcolor: "var(--card)",
                              border: "1px solid var(--border)",
                              color: "var(--foreground)",
                              "&:hover": {
                                bgcolor: "var(--secondary)",
                              },
                            }}
                          >
                            <GitHubIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Project Content */}
                      <Box
                        sx={{
                          p: 3,
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            fontSize: "1.25rem",
                            color: "var(--foreground)"
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--muted-foreground)",
                            mb: 3,
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            flexGrow: 1,
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Tech Stack */}
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ flexWrap: "wrap" }}
                        >
                          {project.techStack.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: "var(--secondary)",
                                border: "1px solid var(--border)",
                                color: "var(--muted-foreground)",
                                fontSize: "0.7rem",
                                fontWeight: 500,
                                borderRadius: "4px",
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
