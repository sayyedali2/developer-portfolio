"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FAQS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box
      id="faq"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="FAQ"
          title="Common questions, clear answers"
          description="A few common questions about my experience, the technologies I work with, and the kind of projects and opportunities I’m open to."
        />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px", amount: 0.2 }}
          sx={{
            maxWidth: 960,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionBox
                key={index}
                variants={itemVariants}
                sx={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  borderBottom:
                    index === FAQS.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "none",
                }}
              >
                <Box
                  onClick={() => toggleFAQ(index)}
                  sx={{
                    py: 3.5,
                    px: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      "& .faq-question": {
                        color: "#E87A1E",
                      },
                    },
                  }}
                >
                  <Typography
                    className="faq-question"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "1.0625rem", md: "1.25rem" },
                      fontWeight: 400,
                      color: isOpen ? "#E87A1E" : "#FFFFFF",
                      letterSpacing: "-0.01em",
                      pr: 3,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.question}
                  </Typography>

                  <IconButton
                    size="small"
                    sx={{
                      color: isOpen ? "#E87A1E" : "#FFFFFF",
                      p: 1,
                      border: "1px solid",
                      borderColor: isOpen
                        ? "#E87A1E"
                        : "rgba(255, 255, 255, 0.15)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? (
                      <RemoveIcon sx={{ fontSize: 18 }} />
                    ) : (
                      <AddIcon sx={{ fontSize: 18 }} />
                    )}
                  </IconButton>
                </Box>

                <Collapse in={isOpen} timeout={250}>
                  <Box sx={{ pb: 3.5, px: 1, pr: { md: 8 } }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9375rem",
                        color: "#9E9E9E",
                        lineHeight: 1.8,
                        fontWeight: 400,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </MotionBox>
            );
          })}
        </MotionBox>
      </Container>
    </Box>
  );
}
