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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const gradients = [
    "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
    "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
    "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)",
    "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
    "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
    "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
    "linear-gradient(135deg, #06B6D4 0%, #22C55E 100%)",
  ];

  return (
    <Box
      id="services"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="What I Offer"
          title="Freelance Services"
          description="Professional web development services tailored to your needs"
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={3}>
            {SERVICES.map((service, index) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <MotionBox
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  sx={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: 4,
                      borderRadius: 4,
                      bgcolor: "rgba(18, 18, 26, 0.6)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(139, 92, 246, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "default",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(139, 92, 246, 0.3)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        "& .service-icon": {
                          transform: "scale(1.1) rotate(5deg)",
                        },
                        "& .glow-bg": {
                          opacity: 0.15,
                        },
                      },
                    }}
                  >
                    {/* Glow background */}
                    <Box
                      className="glow-bg"
                      sx={{
                        position: "absolute",
                        top: -50,
                        right: -50,
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        background: gradients[index],
                        filter: "blur(60px)",
                        opacity: 0.1,
                        transition: "opacity 0.3s ease",
                      }}
                    />

                    {/* Icon */}
                    <Box
                      className="service-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: gradients[index],
                        mb: 3,
                        transition: "transform 0.3s ease",
                        boxShadow: `0 8px 24px ${gradients[index].includes("#8B5CF6") ? "rgba(139, 92, 246, 0.3)" : "rgba(6, 182, 212, 0.3)"}`,
                      }}
                    >
                      <service.icon sx={{ color: "white", fontSize: 28 }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: "1.1rem",
                        position: "relative",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        position: "relative",
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
