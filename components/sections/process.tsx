"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion, Variants } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Process() {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
      <SectionTitle
  subtitle="PROCESS"
  title="A simple way to turn ideas into products"
  description="I follow a practical process that helps me understand the problem, plan the solution, build the product, and improve it along the way."
/>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {PROCESS_STEPS.map((item, index) => (
            <MotionBox
              key={item.step}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -80px 0px", amount: 0.2 }}
              sx={{
                py: { xs: 4, md: 6 },
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom:
                  index === PROCESS_STEPS.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "none",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "160px 1fr 1.5fr" },
                gap: { xs: 2, md: 6 },
                alignItems: "baseline",
                transition: "background-color 0.25s ease, border-color 0.25s ease",
                px: { xs: 0, md: 2 },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "& .step-num": {
                    color: "#FFFFFF",
                  },
                },
              }}
            >
              {/* Step indicator */}
              <Typography
                className="step-num"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#E87A1E",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
              >
                {item.step}
              </Typography>

              {/* Step Title */}
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 400,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </Typography>

              {/* Step Description */}
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#9E9E9E",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {item.description}
              </Typography>
            </MotionBox>
          ))}

          {/* Bottom Callout in Process */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              pt: { xs: 6, md: 8 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                color: "#9E9E9E",
              }}
            >
              Have an idea for a web application or product? Let’s build it together.
            </Typography>

            <Button
              variant="contained"
              onClick={() => handleScrollTo("#contact")}
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: "#E87A1E",
                color: "#000000",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                px: 3.5,
                py: 1.5,
                borderRadius: 999,
                boxShadow: "none",
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#D16B15",
                  boxShadow: "none",
                },
              }}
            >
             Let’s Build Something
            </Button>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
