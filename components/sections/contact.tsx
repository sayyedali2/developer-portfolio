"use client";

import { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion, Variants } from "framer-motion";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Contact() {
  const [copied, setCopied] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="LET'S WORK TOGETHER"
          title="Have a project in mind?"
          description="Whether you're building a web application, SaaS product, or AI-powered solution, I'd be happy to discuss your idea and explore how we can build it together."
        />
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.15 }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
            gap: { xs: 6, lg: 10 },
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Direct Invitation & Positioning */}
          <MotionBox
            variants={itemVariants}
            sx={{
              p: { xs: 4, sm: 6 },
              backgroundColor: "#0E1015",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 400,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Whether you're hiring a full-stack developer, building a web project, or turning an idea into a real product, I'd love to hear from you.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  color: "#A1A1AA",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                I focus on building reliable, practical software and keeping communication clear throughout the process. Reach out directly via email to start a conversation.
              </Typography>
            </Box>

            {/* Email Actions Row */}
            <Box
              sx={{
                pt: 4,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1.125rem", sm: "1.375rem" },
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  wordBreak: "break-all",
                }}
              >
                {DEVELOPER_INFO.email}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  variant="contained"
                  startIcon={<EmailIcon sx={{ fontSize: 18 }} />}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    backgroundColor: "#E87A1E",
                    color: "#000000",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    px: 3.5,
                    py: 1.5,
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
                  Send an Email
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleCopyEmail}
                  startIcon={
                    copied ? (
                      <CheckIcon sx={{ fontSize: 16, color: "#E87A1E" }} />
                    ) : (
                      <ContentCopyIcon
                        sx={{ fontSize: 16, color: "#FFFFFF" }}
                      />
                    )
                  }
                  sx={{
                    borderColor: copied
                      ? "#E87A1E"
                      : "rgba(255, 255, 255, 0.2)",
                    color: copied ? "#E87A1E" : "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    px: 3,
                    py: 1.5,
                    borderRadius: 999,
                    textTransform: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    },
                  }}
                >
                  {copied ? "Address Copied!" : "Copy Email"}
                </Button>
              </Box>
            </Box>
          </MotionBox>

          {/* Right Column: Location, Availability & Social Profiles */}
          <MotionBox
            variants={itemVariants}
            sx={{
              p: { xs: 4, sm: 6 },
              backgroundColor: "#0E1015",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Availability & Location details */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#E87A1E",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                AVAILABILITY &amp; LOCATION
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
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
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  {DEVELOPER_INFO.availability}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#A1A1AA",
                  lineHeight: 1.7,
                  mb: 1,
                }}
              >
                Based in {DEVELOPER_INFO.location} (UTC+5:30)
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.875rem",
                  color: "#71717A",
                }}
              >
                Typical response time: within 24 hours
              </Typography>
            </Box>

            {/* Online Profiles */}
            <Box
              sx={{ pt: 4, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#E87A1E",
                  textTransform: "uppercase",
                  mb: 2.5,
                }}
              >
                SOCIALS
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {SOCIAL_LINKS.map((link) => (
                  <Button
                    key={link.name}
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<link.icon sx={{ fontSize: 16 }} />}
                    sx={{
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      color: "#FFFFFF",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      px: 2.5,
                      py: 1.25,
                      borderRadius: 999,
                      textTransform: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#FFFFFF",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
