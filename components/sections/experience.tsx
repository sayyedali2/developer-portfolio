"use client";

import { useRef } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import WorkIcon from "@mui/icons-material/Work";

const MotionBox = motion.create(Box);

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      id="experience"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 12, md: 16 },
        position: "relative",
        bgcolor: "var(--background)",
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          subtitle="Career"
          title="Professional Journey"
          description="A timeline of my roles and achievements in the industry."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {EXPERIENCES.map((experience) => (
            <MotionBox
              key={experience.id}
              variants={itemVariants}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "16px",
                  bgcolor: "var(--card)",
                  border: "1px solid var(--border)",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                  "&:hover": {
                    borderColor: "var(--foreground)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                  },
                }}
              >
                <Grid container spacing={3}>
                  {/* Left Column: Date & Company */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "var(--muted-foreground)",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {experience.period}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 1 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "var(--secondary)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <WorkIcon sx={{ fontSize: 16, color: "var(--foreground)" }} />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            color: "var(--foreground)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {experience.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Right Column: Role & Details */}
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: "1.1rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {experience.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--muted-foreground)",
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      {experience.description}
                    </Typography>

                    {/* Achievements */}
                    <Stack spacing={1.5}>
                      {experience.achievements.map((achievement, i) => (
                        <Box
                          key={i}
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
                              bgcolor: "var(--border)",
                              mt: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.6 }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
