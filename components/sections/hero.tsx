"use client";

import { Box, Container, Typography, Button, Stack, IconButton } from "@mui/material";
import { motion, Variants } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Premium spring ease
      },
    },
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Status Pill */}
          <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1,
                borderRadius: "50px",
                bgcolor: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#22C55E", // Green dot for availability
                  boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.2)",
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 600, color: "var(--foreground)", letterSpacing: "0.02em" }}>
                {DEVELOPER_INFO.availability}
              </Typography>
            </Box>
          </MotionBox>

          {/* Hero Headline */}
          <MotionTypography
            variant="h1"
            variants={itemVariants}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.3rem", md: "4rem", lg: "5rem" },
              fontWeight: 800,
              mb: 3,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              color: "var(--foreground)",
              maxWidth: "1000px",
            }}
          >
            Engineering <Box component="span" sx={{ color: "var(--muted-foreground)" }}>premium</Box> digital experiences.
          </MotionTypography>

          {/* Subtitle */}
          <MotionTypography
            variant="body1"
            variants={itemVariants}
            sx={{
              fontSize: { xs: "1.125rem", md: "1.35rem" },
              color: "var(--muted-foreground)",
              maxWidth: "600px",
              mb: 6,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            I'm {DEVELOPER_INFO.name}, a {DEVELOPER_INFO.title.toLowerCase()} specializing in building exceptional, high-performance web applications.
          </MotionTypography>

          {/* CTA & Socials */}
          <MotionBox variants={itemVariants} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                href="#projects"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  bgcolor: "var(--foreground)",
                  color: "var(--background)",
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                  "&:hover": {
                    bgcolor: "var(--primary-light)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                View Selected Works
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  bgcolor: "var(--card)",
                  "&:hover": {
                    borderColor: "var(--foreground)",
                    bgcolor: "var(--secondary)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Let's Talk
              </Button>
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "8px",
                    bgcolor: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                    "&:hover": {
                      color: "var(--foreground)",
                      borderColor: "var(--foreground)",
                      bgcolor: "var(--background)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <social.icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Stack>
          </MotionBox>
        </MotionBox>

        {/* Hero Cinematic Image */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          sx={{
            mt: { xs: 8, md: 12 },
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            aspectRatio: "16/9",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
            bgcolor: "var(--card)",
          }}
        >
          <Image
            src="/images/hero_background.png"
            alt="Developer workspace"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          {/* Subtle gradient overlay to blend with background if needed */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.02) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </MotionBox>
      </Container>
    </Box>
  );
}
