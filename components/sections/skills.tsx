"use client";

import { Box, Container, Typography, Grid, LinearProgress } from "@mui/material";
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const progressVariants: Variants = {
    hidden: { width: "0%" },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <Box
      id="skills"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="My Skills"
          title="Technologies I Work With"
          description="A comprehensive toolkit for building modern web applications"
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <Grid key={category.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <MotionBox
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 4,
                      bgcolor: "rgba(18, 18, 26, 0.6)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(139, 92, 246, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(139, 92, 246, 0.3)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    {/* Gradient top border */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: categoryIndex % 2 === 0
                          ? "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
                          : "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
                      }}
                    />

                    {/* Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: categoryIndex % 2 === 0
                            ? "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
                            : "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
                        }}
                      >
                        <category.icon sx={{ color: "white", fontSize: 22 }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, fontSize: "1.1rem" }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {/* Skills */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                      {category.skills.map((skill) => (
                        <Box key={skill.name}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: 0.75,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                color: "text.primary",
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                fontWeight: 500,
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              bgcolor: "rgba(139, 92, 246, 0.1)",
                              overflow: "hidden",
                            }}
                          >
                            <MotionBox
                              variants={progressVariants}
                              custom={skill.level}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              sx={{
                                height: "100%",
                                borderRadius: 3,
                                background: categoryIndex % 2 === 0
                                  ? "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
                                  : "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
                              }}
                            />
                          </Box>
                        </Box>
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
