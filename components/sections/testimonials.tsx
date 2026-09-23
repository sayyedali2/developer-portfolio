"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
  Rating,
} from "@mui/material";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[current];

  return (
    <Box
      id="testimonials"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 12, md: 16 },
        position: "relative",
        bgcolor: "var(--card)", // Alternating background color for sections
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          subtitle="Client Reviews"
          title="What Clients Say"
          description="Direct feedback from partners and clients."
        />

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          sx={{
            position: "relative",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {/* Testimonial Card */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: "12px",
              bgcolor: "var(--background)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
              position: "relative",
              overflow: "hidden",
              minHeight: { xs: 320, md: 300 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <MotionBox
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Content */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--foreground)",
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 500,
                    maxWidth: 600,
                  }}
                >
                  "{testimonial.content}"
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "var(--secondary)",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>

                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--foreground)"
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--muted-foreground)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            </AnimatePresence>
          </Box>

          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              mt: 4,
            }}
          >
            <IconButton
              onClick={handlePrev}
              aria-label="Previous testimonial"
              sx={{
                width: 36,
                height: 36,
                bgcolor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                "&:hover": {
                  bgcolor: "var(--secondary)",
                  borderColor: "var(--foreground)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>

            {/* Dots */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {TESTIMONIALS.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  sx={{
                    width: index === current ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    bgcolor: index === current ? "var(--foreground)" : "var(--border)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: index === current ? "var(--foreground)" : "var(--muted-foreground)",
                    },
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNext}
              aria-label="Next testimonial"
              sx={{
                width: 36,
                height: 36,
                bgcolor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                "&:hover": {
                  bgcolor: "var(--secondary)",
                  borderColor: "var(--foreground)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
