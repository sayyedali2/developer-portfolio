"use client";

import { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion, Variants } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import SouthIcon from "@mui/icons-material/South";
import { DEVELOPER_INFO } from "@/lib/constants";

const MotionBox = motion.create(Box);

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "92vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: 16, sm: 20, md: 24 },
        pb: { xs: 10, md: 14 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            maxWidth: 1040,
            mx: "auto",
            textAlign: { xs: "left", md: "center" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          {/* Afterglow-style All-Caps Eyebrow in Solid Saffron */}
          <MotionBox variants={itemVariants} sx={{ mb: 2.5 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 0.75,
                backgroundColor: "rgba(232, 122, 30, 0.08)",
                border: "1px solid rgba(232, 122, 30, 0.2)",
                borderRadius: 999,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#E87A1E",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "0.75rem", sm: "0.8125rem" },
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#E87A1E",
                  textTransform: "uppercase",
                }}
              >
                Software that works beyond the demo
              </Typography>
            </Box>
          </MotionBox>

          {/* Afterglow Regular-Weight Signature Headline */}
          <MotionBox variants={itemVariants} sx={{ mb: 3.5, width: "100%" }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "2.5rem", sm: "3.75rem", md: "4.75rem", lg: "5.25rem" },
                fontWeight: 400, // Afterglow signature regular weight
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
              }}
            >
            Building modern web applications for real-world use.
            </Typography>
          </MotionBox>

          {/* Editorial Narrative */}
          <MotionBox variants={itemVariants} sx={{ mb: 5, maxWidth: 760 }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "1.0625rem", sm: "1.1875rem" },
                fontWeight: 400,
                color: "#9E9E9E",
                lineHeight: 1.75,
                letterSpacing: "-0.01em",
              }}
            >
             I’m Sayyed Amaan Ali, a full-stack developer building reliable web applications with Node.js, NestJS, Next.js, databases, APIs, background processing, and third-party integrations.
            </Typography>
          </MotionBox>

          {/* CTA Pill Buttons Row */}
          <MotionBox
            variants={itemVariants}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
              mb: 6,
            }}
          >
            {/* Primary Pill Button */}
            <Button
              variant="contained"
              onClick={() => handleScrollTo("#work")}
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{
                backgroundColor: "#E87A1E",
                color: "#000000",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                px: 4.5,
                py: 1.75,
                borderRadius: 999,
                boxShadow: "none",
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#D16B15",
                  boxShadow: "none",
                },
              }}
            >
              Explore My Work
            </Button>

            {/* Secondary Outlined Pill Button */}
            <Button
              variant="outlined"
              onClick={() => handleScrollTo("#contact")}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                px: 4,
                py: 1.75,
                borderRadius: 999,
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                },
              }}
            >
              Let&apos;s Talk
            </Button>

            {/* Direct Email Copy Button */}
            <Button
              onClick={handleCopyEmail}
              startIcon={
                copied ? (
                  <CheckIcon sx={{ fontSize: 16, color: "#E87A1E" }} />
                ) : (
                  <ContentCopyIcon sx={{ fontSize: 16, color: "#9E9E9E" }} />
                )
              }
              sx={{
                color: copied ? "#E87A1E" : "#9E9E9E",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                px: 2.5,
                py: 1.5,
                borderRadius: 999,
                border: "1px solid",
                borderColor: copied ? "#E87A1E" : "rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              {copied ? "Email Copied!" : DEVELOPER_INFO.email}
            </Button>
          </MotionBox>

          {/* Bottom Availability Status & Scroll Indicator */}
          <MotionBox
            variants={itemVariants}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, sm: 4 },
              pt: 4,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#E87A1E",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.875rem",
                  color: "#FFFFFF",
                  fontWeight: 500,
                }}
              >
                Open to full-stack developer roles & contract work
              </Typography>
            </Box>

            <Typography
              sx={{
                display: { xs: "none", sm: "inline" },
                color: "rgba(255, 255, 255, 0.2)",
              }}
            >
              •
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                color: "#9E9E9E",
              }}
            >
              Udaipur, India (UTC+5:30) • Open to Remote Worldwide
            </Typography>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
