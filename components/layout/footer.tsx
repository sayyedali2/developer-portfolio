"use client";

import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const MotionBox = motion.create(Box);

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid var(--border)",
        bgcolor: "var(--card)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            {DEVELOPER_INFO.name.split(" ")[0]}
            <Box component="span" sx={{ color: "var(--muted-foreground)" }}>
              .
            </Box>
          </Typography>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "var(--muted-foreground)",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Built with{" "}
            <FavoriteIcon
              sx={{ fontSize: 14, color: "var(--foreground)", mx: 0.5 }}
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
                  width: 36,
                  height: 36,
                  color: "var(--muted-foreground)",
                  border: "1px solid transparent",
                  borderRadius: "6px",
                  "&:hover": {
                    color: "var(--foreground)",
                    bgcolor: "var(--secondary)",
                    borderColor: "var(--border)",
                  },
                  transition: "all 0.2s ease",
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
