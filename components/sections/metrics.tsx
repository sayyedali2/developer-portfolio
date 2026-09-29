"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { METRICS } from "@/lib/constants";

const MotionBox = motion.create(Box);

export function Metrics() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0B0C11",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px", amount: 0.25 }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: { xs: 5, md: 6 },
          }}
        >
          {METRICS.map((metric, idx) => (
            <MotionBox
              key={idx}
              variants={itemVariants}
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: { lg: idx !== 0 ? 4 : 0 },
                borderLeft: { lg: idx !== 0 ? "1px solid rgba(255, 255, 255, 0.08)" : "none" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "3rem", md: "3.75rem" },
                  fontWeight: 400, // Afterglow large regular number
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  mb: 1.5,
                }}
              >
                {metric.value}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#E87A1E",
                  letterSpacing: "-0.01em",
                  mb: 0.5,
                }}
              >
                {metric.label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#9E9E9E",
                  lineHeight: 1.6,
                }}
              >
                {metric.description}
              </Typography>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
