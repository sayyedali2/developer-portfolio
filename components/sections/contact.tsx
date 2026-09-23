"use client";

import { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="contact"
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
          subtitle="Get In Touch"
          title="Let's Build Together"
          description="I'm currently open for freelance opportunities and full-time roles."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          sx={{ mt: 6 }}
        >
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {/* Email Card */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <MotionBox variants={itemVariants}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "16px",
                    bgcolor: "var(--card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                    "&:hover": {
                      borderColor: "var(--foreground)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "var(--secondary)",
                      border: "1px solid var(--border)",
                      mb: 3,
                    }}
                  >
                    <EmailIcon sx={{ color: "var(--foreground)", fontSize: 24 }} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: "var(--muted-foreground)", mb: 1 }}>
                    Email Me At
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "var(--foreground)", mb: 3 }}>
                    {DEVELOPER_INFO.email}
                  </Typography>
                  
                  <Stack direction="row" spacing={2}>
                    <Tooltip title="Send Email">
                      <IconButton
                        href={`mailto:${DEVELOPER_INFO.email}`}
                        sx={{
                          bgcolor: "var(--foreground)",
                          color: "var(--background)",
                          borderRadius: "8px",
                          width: 44,
                          height: 44,
                          "&:hover": { bgcolor: "black" },
                        }}
                      >
                        <EmailIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={copied ? "Copied!" : "Copy Address"}>
                      <IconButton
                        onClick={handleCopyEmail}
                        sx={{
                          bgcolor: "var(--secondary)",
                          color: "var(--foreground)",
                          borderRadius: "8px",
                          width: 44,
                          height: 44,
                          border: "1px solid var(--border)",
                          "&:hover": { bgcolor: "var(--background)" },
                        }}
                      >
                        {copied ? <CheckIcon fontSize="small" color="success" /> : <ContentCopyIcon fontSize="small" />}
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              </MotionBox>
            </Grid>

            {/* Location Card */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <MotionBox variants={itemVariants} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: "var(--card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                    "&:hover": {
                      borderColor: "var(--foreground)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "var(--secondary)",
                      border: "1px solid var(--border)",
                      mb: 3,
                    }}
                  >
                    <LocationOnIcon sx={{ color: "var(--foreground)", fontSize: 24 }} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: "var(--muted-foreground)", mb: 1 }}>
                    Based In
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "var(--foreground)" }}>
                    {DEVELOPER_INFO.location}
                  </Typography>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>

          {/* Social Links Centered */}
          <MotionBox variants={itemVariants}>
            <Box sx={{ mt: 8, textAlign: "center" }}>
              <Typography variant="subtitle2" sx={{ color: "var(--muted-foreground)", mb: 3 }}>
                Connect with me on other platforms
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                {SOCIAL_LINKS.map((social) => (
                  <Tooltip key={social.name} title={social.name}>
                    <IconButton
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "var(--card)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        borderRadius: "12px",
                        "&:hover": {
                          bgcolor: "var(--foreground)",
                          color: "var(--background)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Box>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
