"use client";

import { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Contact() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "rgba(18, 18, 26, 0.6)",
      borderRadius: 3,
      "& fieldset": {
        borderColor: "rgba(139, 92, 246, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(139, 92, 246, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8B5CF6",
      },
    },
    "& .MuiInputLabel-root": {
      color: "text.secondary",
      "&.Mui-focused": {
        color: "#8B5CF6",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "text.primary",
    },
  };

  return (
    <Box
      id="contact"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Get In Touch"
          title="Let&apos;s Work Together"
          description="Have a project in mind? I&apos;d love to hear from you"
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
         
            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox variants={itemVariants}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(18, 18, 26, 0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(139, 92, 246, 0.1)",
                    height: "100%",
                  }}
                >
                  {/* Availability Badge */}
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
                      mb: 4,
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

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Contact Information
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 4,
                      lineHeight: 1.7,
                    }}
                  >
                    I&apos;m currently available for freelance work. If you have
                    a project that needs a dedicated developer, feel free to
                    reach out.
                  </Typography>

                  {/* Contact Details */}
                  <Stack spacing={3} sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "rgba(139, 92, 246, 0.1)",
                          border: "1px solid rgba(139, 92, 246, 0.2)",
                        }}
                      >
                        <EmailIcon sx={{ color: "#8B5CF6" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {DEVELOPER_INFO.email}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "rgba(6, 182, 212, 0.1)",
                          border: "1px solid rgba(6, 182, 212, 0.2)",
                        }}
                      >
                        <LocationOnIcon sx={{ color: "#06B6D4" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          Location
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {DEVELOPER_INFO.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>

                  {/* Social Links */}
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    Follow Me
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {SOCIAL_LINKS.map((social) => (
                      <IconButton
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        sx={{
                          width: 42,
                          height: 42,
                          bgcolor: "rgba(139, 92, 246, 0.1)",
                          border: "1px solid rgba(139, 92, 246, 0.2)",
                          color: "text.secondary",
                          "&:hover": {
                            bgcolor: "rgba(139, 92, 246, 0.2)",
                            borderColor: "#8B5CF6",
                            color: "#8B5CF6",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <social.icon fontSize="small" />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </MotionBox>
            </Grid>
         
        </MotionBox>
      </Container>
    </Box>
  );
}
