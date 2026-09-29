"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Services() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      },
    }),
  };

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="SERVICES"
          title="What I can help you build"
          description="From web applications and SaaS products to backend systems and AI-powered features, I help turn ideas and business needs into useful digital products."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {SERVICES.map((service, index) => (
            <MotionBox
              key={service.number}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "0px 0px -100px 0px",
                amount: 0.2,
              }}
              sx={{
                p: { xs: 4, md: 5 },
                backgroundColor: "#0D0E12",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                "&:hover": {
                  borderColor: "rgba(232, 122, 30, 0.6)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "#E87A1E",
                    }}
                  >
                    {service.number} // ARCHITECTURAL SERVICE
                  </Typography>
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "1.375rem", md: "1.625rem" },
                    fontWeight: 400,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.35,
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#9E9E9E",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  pt: 3,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {service.features.map((feature, fIdx) => (
                  <Box
                    key={fIdx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "#E87A1E" }} />
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.875rem",
                        color: "#FFFFFF",
                        fontWeight: 400,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
