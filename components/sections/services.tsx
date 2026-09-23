"use client";

import { useRef } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Services() {
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

  const cardVariants: Variants = {
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
      id="services"
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
          subtitle="What I Offer"
          title="Professional Services"
          description="Tailored web development solutions focused on performance, design, and user experience."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={3}>
            {SERVICES.map((service) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <MotionBox
                  variants={cardVariants}
                  sx={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: 4,
                      borderRadius: "8px",
                      bgcolor: "var(--card)",
                      border: "1px solid var(--border)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                      "&:hover": {
                        borderColor: "var(--foreground)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.04)",
                        transform: "translateY(-2px)",
                        "& .service-icon": {
                          borderColor: "var(--foreground)",
                        },
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="service-icon"
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "var(--secondary)",
                        border: "1px solid var(--border)",
                        mb: 3,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <service.icon sx={{ color: "var(--foreground)", fontSize: 22 }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: "1.1rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--muted-foreground)",
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
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
