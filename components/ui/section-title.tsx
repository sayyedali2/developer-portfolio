"use client";

import { Box, Typography } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      sx={{
        textAlign: align,
        mb: { xs: 6, md: 8 },
        maxWidth: align === "center" ? 700 : "none",
        mx: align === "center" ? "auto" : 0,
      }}
    >
      <MotionTypography
        variant="overline"
        variants={itemVariants}
        sx={{
          display: "inline-block",
          px: 2,
          py: 0.75,
          mb: 2,
          borderRadius: 2,
          bgcolor: "rgba(139, 92, 246, 0.1)",
          color: "#8B5CF6",
          fontWeight: 600,
          letterSpacing: 1,
          fontSize: "0.75rem",
        }}
      >
        {subtitle}
      </MotionTypography>

      <MotionTypography
        variant="h2"
        variants={itemVariants}
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
          mb: description ? 2 : 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </MotionTypography>

      {description && (
        <MotionTypography
          variant="body1"
          variants={itemVariants}
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            maxWidth: 550,
            mx: align === "center" ? "auto" : 0,
            lineHeight: 1.7,
          }}
        >
          {description}
        </MotionTypography>
      )}
    </MotionBox>
  );
}
