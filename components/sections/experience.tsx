"use client";

import { useRef } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import { EXPERIENCES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="experience"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="My Journey"
          title="Professional Experience"
          description="A timeline of my career growth and achievements"
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          sx={{
            position: "relative",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {/* Timeline line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: 40 },
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, #8B5CF6 0%, #06B6D4 50%, transparent 100%)",
            }}
          />

          <Stack spacing={4}>
            {EXPERIENCES.map((experience, index) => (
              <MotionBox
                key={experience.id}
                variants={itemVariants}
                sx={{
                  pl: { xs: 8, md: 12 },
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <MotionBox
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  sx={{
                    position: "absolute",
                    left: { xs: 8, md: 28 },
                    top: 24,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <WorkIcon sx={{ fontSize: 12, color: "white" }} />
                </MotionBox>

                {/* Content Card */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    bgcolor: "rgba(18, 18, 26, 0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(139, 92, 246, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(139, 92, 246, 0.3)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  {/* Period Badge */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      mb: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(6, 182, 212, 0.1)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                      color: "#06B6D4",
                      fontWeight: 600,
                    }}
                  >
                    {experience.period}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#8B5CF6",
                      fontWeight: 500,
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    {experience.description}
                  </Typography>

                  {/* Achievements */}
                  <Stack spacing={1}>
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
                            bgcolor: "#8B5CF6",
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", fontSize: "0.85rem" }}
                        >
                          {achievement}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </MotionBox>
            ))}
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}
