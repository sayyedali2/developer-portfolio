"use client";

import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const MotionBox = motion.create(Box);

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
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

  const isCenter = align === "center";

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.2 }}
      sx={{
        textAlign: align,
        mb: { xs: 6, md: 9 },
        maxWidth: isCenter ? 820 : 920,
        mx: isCenter ? "auto" : 0,
      }}
    >
      {/* Afterglow-style All-Caps Eyebrow */}
      <MotionBox variants={itemVariants}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            color: "#E87A1E", // Saffron accent
            textTransform: "uppercase",
            mb: 2,
            display: "inline-block",
          }}
        >
          {subtitle}
        </Typography>
      </MotionBox>

      {/* Main Title - Afterglow Regular Weight & Large Scale */}
      <MotionBox variants={itemVariants}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400, // Afterglow signature regular weight
            fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            mb: description ? 2 : 0,
          }}
        >
          {title}
        </Typography>
      </MotionBox>

      {/* Description */}
      {description && (
        <MotionBox variants={itemVariants}>
          <Typography
            variant="body1"
            sx={{
              color: "#9E9E9E",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
              maxWidth: 720,
              mx: isCenter ? "auto" : 0,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </MotionBox>
      )}
    </MotionBox>
  );
}
