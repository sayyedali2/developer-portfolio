"use client";

import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import { DEVELOPER_INFO } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

const highlights = [
  {
    icon: CodeIcon,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: RocketLaunchIcon,
    title: "Fast Delivery",
    description: "Delivering projects on time without compromising quality",
  },
  {
    icon: GroupsIcon,
    title: "Collaboration",
    description: "Effective communication and teamwork with clients",
  },
];

export function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="About Me"
          title="Passionate Developer Building Digital Experiences"
          description="Combining creativity with technical expertise to deliver exceptional web solutions"
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {/* About Text */}
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox variants={itemVariants}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(18, 18, 26, 0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(139, 92, 246, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.9,
                      mb: 3,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    {DEVELOPER_INFO.about}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }} useFlexGap>
                    <Chip
                      icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                      label={DEVELOPER_INFO.location}
                      sx={{
                        bgcolor: "rgba(139, 92, 246, 0.1)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        color: "text.secondary",
                        "& .MuiChip-icon": { color: "#8B5CF6" },
                      }}
                    />
                    <Chip
                      label="3+ Projects Delivered"
                      sx={{
                        bgcolor: "rgba(6, 182, 212, 0.1)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                        color: "text.secondary",
                      }}
                    />
                    <Chip
                      label="1+ Years Experience"
                      sx={{
                        bgcolor: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        color: "text.secondary",
                      }}
                    />
                  </Stack>
                </Box>
              </MotionBox>
            </Grid>

            {/* Highlight Cards */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                {highlights.map((item, index) => (
                  <MotionBox
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 3,
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "rgba(18, 18, 26, 0.4)",
                        border: "1px solid rgba(139, 92, 246, 0.1)",
                        cursor: "default",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(18, 18, 26, 0.6)",
                          borderColor: "rgba(139, 92, 246, 0.3)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${
                            index === 0
                              ? "#8B5CF6"
                              : index === 1
                              ? "#06B6D4"
                              : "#22C55E"
                          } 0%, ${
                            index === 0
                              ? "#A78BFA"
                              : index === 1
                              ? "#22D3EE"
                              : "#4ADE80"
                          } 100%)`,
                          flexShrink: 0,
                        }}
                      >
                        <item.icon sx={{ color: "white", fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            fontSize: "1rem",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
