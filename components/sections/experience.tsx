"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const MotionBox = motion.create(Box);

export function Experience() {
  const itemVariants: Variants = {
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

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#07080A",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          subtitle="EXPERIENCE"
          title="My development experience"
          description="Hands-on experience building web applications, developing features, working with APIs and databases, and collaborating with development teams."
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {EXPERIENCES.map((exp, index) => (
            <MotionBox
              key={exp.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "0px 0px -80px 0px",
                amount: 0.2,
              }}
              sx={{
                py: { xs: 5, md: 6 },
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom:
                  index === EXPERIENCES.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "none",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
                gap: { xs: 3, md: 6 },
                alignItems: "start",
                transition: "background-color 0.25s ease",
                px: { xs: 0, md: 2 },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.015)",
                },
              }}
            >
              {/* Left Column: Period & Location */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#E87A1E",
                    mb: 1,
                  }}
                >
                  {exp.period}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#9E9E9E",
                  }}
                >
                  {exp.location}
                </Typography>
              </Box>

              {/* Right Column: Title, Company, Description & Achievements */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 500,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#9E9E9E",
                    }}
                  >
                    at{" "}
                    <Box component="span" sx={{ color: "#FFFFFF" }}>
                      {exp.company}
                    </Box>
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#9E9E9E",
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {exp.description}
                </Typography>

                {/* Achievements List */}
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    p: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.25,
                    mb: 3,
                  }}
                >
                  {exp.achievements.map((ach, achIdx) => (
                    <Box
                      component="li"
                      key={achIdx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.875rem",
                        color: "#9E9E9E",
                        lineHeight: 1.6,
                      }}
                    >
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          backgroundColor: "#E87A1E",
                          mt: 1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.875rem",
                          color: "#FFFFFF",
                        }}
                      >
                        {ach}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Tech Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {exp.techStack.map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        px: 1.75,
                        py: 0.5,
                        borderRadius: 999,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.75rem",
                          color: "#9E9E9E",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
