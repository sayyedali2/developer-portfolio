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
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
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
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          subtitle="Client Reviews"
          title="What Clients Say"
          description="Feedback from clients I&apos;ve had the pleasure of working with"
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{
            position: "relative",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          {/* Testimonial Card */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "rgba(18, 18, 26, 0.6)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(139, 92, 246, 0.1)",
              position: "relative",
              overflow: "hidden",
              minHeight: { xs: 320, md: 280 },
            }}
          >
            {/* Quote icon */}
            <FormatQuoteIcon
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: 60,
                color: "rgba(139, 92, 246, 0.1)",
              }}
            />

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
                  opacity: { duration: 0.3 },
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Avatar */}
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 3,
                    bgcolor: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    border: "3px solid rgba(139, 92, 246, 0.3)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </Avatar>

                {/* Rating */}
                <Rating
                  value={testimonial.rating}
                  readOnly
                  sx={{
                    mb: 2,
                    "& .MuiRating-iconFilled": {
                      color: "#F59E0B",
                    },
                  }}
                />

                {/* Content */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    maxWidth: 550,
                  }}
                >
                  &quot;{testimonial.content}&quot;
                </Typography>

                {/* Author */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    mb: 0.5,
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#8B5CF6",
                    fontWeight: 500,
                  }}
                >
                  {testimonial.role} at {testimonial.company}
                </Typography>
              </MotionBox>
            </AnimatePresence>
          </Box>

          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <IconButton
              onClick={handlePrev}
              aria-label="Previous testimonial"
              sx={{
                bgcolor: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                color: "#8B5CF6",
                "&:hover": {
                  bgcolor: "rgba(139, 92, 246, 0.2)",
                },
              }}
            >
              <ArrowBackIcon />
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
                    width: index === current ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: index === current ? "#8B5CF6" : "rgba(139, 92, 246, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: index === current ? "#8B5CF6" : "rgba(139, 92, 246, 0.5)",
                    },
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNext}
              aria-label="Next testimonial"
              sx={{
                bgcolor: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                color: "#8B5CF6",
                "&:hover": {
                  bgcolor: "rgba(139, 92, 246, 0.2)",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
