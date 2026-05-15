"use client";

import { Box, Container, Typography, Button, Stack, Chip, IconButton } from "@mui/material";
import { motion, Variants } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: { xs: 10, md: 0 },
        pb: { xs: 6, md: 0 },
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
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Availability Badge */}
          <MotionBox variants={itemVariants} sx={{mt:6}}>
            <Chip
              icon={
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                  
                    borderRadius: "50%",
                    bgcolor: "#22C55E",
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                    },
                  }}
                />
              }
              label={DEVELOPER_INFO.availability}
              sx={{
                mb: 3,
                px: 2,
                py: 2.5,
                bgcolor: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                color: "#22C55E",
                fontWeight: 500,
                "& .MuiChip-icon": {
                  ml: 1,
                },
              }}
            />
          </MotionBox>

          {/* Name */}
          <MotionTypography
            variant="h1"
            variants={itemVariants}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
              fontWeight: 700,
              mb: 1,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {DEVELOPER_INFO.name}
          </MotionTypography>

          {/* Title with gradient */}
          <MotionTypography
            variant="h2"
            variants={itemVariants}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 3,
              background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {DEVELOPER_INFO.title}
          </MotionTypography>

          {/* Intro */}
          <MotionTypography
            variant="body1"
            variants={itemVariants}
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              maxWidth: "600px",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {DEVELOPER_INFO.intro}
          </MotionTypography>

          {/* CTA Buttons */}
          <MotionBox variants={itemVariants}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<VisibilityIcon />}
                href="#projects"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                  boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
                    boxShadow: "0 6px 30px rgba(139, 92, 246, 0.5)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WorkIcon />}
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "#8B5CF6",
                  color: "#8B5CF6",
                  "&:hover": {
                    borderColor: "#A78BFA",
                    bgcolor: "rgba(139, 92, 246, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Hire Me
              </Button>
              
            </Stack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox variants={itemVariants}>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "rgba(139, 92, 246, 0.1)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "text.secondary",
                    "&:hover": {
                      bgcolor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "#8B5CF6",
                      color: "#8B5CF6",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          Scroll to explore
        </Typography>
        <MotionBox
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          sx={{
            width: 24,
            height: 40,
            border: "2px solid rgba(139, 92, 246, 0.3)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            pt: 1,
          }}
        >
          <MotionBox
            animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            sx={{
              width: 4,
              height: 8,
              bgcolor: "#8B5CF6",
              borderRadius: 2,
            }}
          />
        </MotionBox>
      </MotionBox>
    </Box>
  );
}
