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
import Image from "next/image";

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
        staggerChildren: 0.1,
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
      id="about"
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
          subtitle="About Me"
          title="Building Digital Experiences"
          description="Combining technical expertise with structured design to deliver exceptional web solutions."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={3}>
            {/* Bento Grid Layout */}
            
            {/* Main Text Card */}
            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox variants={itemVariants} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: "var(--card)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "var(--foreground)",
                    }
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "var(--foreground)",
                        mb: 3,
                        letterSpacing: "-0.02em"
                      }}
                    >
                      A passion for precision.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "var(--muted-foreground)",
                        lineHeight: 1.8,
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                      }}
                    >
                      {DEVELOPER_INFO.about}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap" }} useFlexGap>
                    <Chip
                      icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                      label={DEVELOPER_INFO.location}
                      sx={{
                        bgcolor: "var(--foreground)",
                        color: "var(--background)",
                        borderRadius: "6px",
                        fontWeight: 600,
                        "& .MuiChip-icon": { color: "var(--background)" },
                      }}
                    />
                    <Chip
                      label="3+ Projects Delivered"
                      sx={{
                        bgcolor: "var(--secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        borderRadius: "6px",
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="1+ Years Experience"
                      sx={{
                        bgcolor: "var(--secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        borderRadius: "6px",
                        fontWeight: 500,
                      }}
                    />
                  </Stack>
                </Box>
              </MotionBox>
            </Grid>

            {/* Image Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox variants={itemVariants} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "300px", md: "100%" },
                    minHeight: "350px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    }
                  }}
                >
                  <Image
                    src="/images/about_workspace.png"
                    alt="Developer workspace"
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)",
                    }}
                  />
                </Box>
              </MotionBox>
            </Grid>

            {/* Bottom 3 Cards */}
            {highlights.map((item) => (
              <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
                <MotionBox variants={itemVariants}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      bgcolor: "var(--card)",
                      border: "1px solid var(--border)",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                      "&:hover": {
                        borderColor: "var(--foreground)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "var(--secondary)",
                        border: "1px solid var(--border)",
                        mb: 3,
                      }}
                    >
                      <item.icon sx={{ color: "var(--foreground)", fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: "1.1rem",
                        color: "var(--foreground)",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}
                    >
                      {item.description}
                    </Typography>
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
