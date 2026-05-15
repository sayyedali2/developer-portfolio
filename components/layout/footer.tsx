"use client";

import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { motion, Variants } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const MotionBox = motion.create(Box);

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: "1px solid rgba(139, 92, 246, 0.1)",
        bgcolor: "rgba(10, 10, 15, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {DEVELOPER_INFO.name.split(" ")[0]}
            <Box component="span" sx={{ WebkitTextFillColor: "#06B6D4" }}>
              .
            </Box>
          </Typography>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textAlign: "center",
            }}
          >
            Built with{" "}
            <FavoriteIcon
              sx={{ fontSize: 16, color: "#EC4899", mx: 0.5 }}
            />{" "}
            by {DEVELOPER_INFO.name} &copy; {new Date().getFullYear()}
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            {SOCIAL_LINKS.map((social) => (
              <IconButton
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "#8B5CF6",
                  },
                  transition: "color 0.3s ease",
                }}
              >
                <social.icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}
