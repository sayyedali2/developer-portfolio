"use client";

import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  };

  return (
    <Box
      id="skills"
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
          subtitle="My Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building robust, scalable web applications."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={3}>
            {SKILL_CATEGORIES.map((category) => (
              <Grid key={category.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <MotionBox
                  variants={cardVariants}
                  sx={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: "16px",
                      bgcolor: "var(--card)",
                      border: "1px solid var(--border)",
                      position: "relative",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                      "&:hover": {
                        borderColor: "var(--foreground)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "var(--secondary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <category.icon sx={{ color: "var(--foreground)", fontSize: 22 }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {/* Skill Cluster */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            bgcolor: "var(--secondary)",
                            border: "1px solid var(--border)",
                            color: "var(--foreground)",
                            fontWeight: 500,
                            borderRadius: "6px",
                            "&:hover": {
                              bgcolor: "var(--foreground)",
                              color: "var(--background)",
                              borderColor: "var(--foreground)",
                            },
                            transition: "all 0.2s ease",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
