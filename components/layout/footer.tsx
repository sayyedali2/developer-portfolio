"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { DEVELOPER_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
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
      component="footer"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#07080A",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 4,
            pb: 6,
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Brand & Studio positioning */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#E87A1E",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                Sayyed Amaan Ali
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                color: "#9E9E9E",
                maxWidth: 440,
              }}
            >
             Full-Stack Developer • Building modern web applications and digital products.
            </Typography>
          </Box>

          {/* Quick Nav Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2.5, sm: 3.5 },
            }}
          >
            {NAV_LINKS.map((link) => (
              <Box
                key={link.name}
                component="a"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: "#9E9E9E",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#FFFFFF",
                  },
                }}
              >
                {link.name}
              </Box>
            ))}
          </Box>

          {/* Scroll to Top */}
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            size="small"
            sx={{
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "50%",
              p: 1.25,
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "#E87A1E",
                color: "#E87A1E",
              },
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* Bottom copyright line */}
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.8125rem",
              color: "#9E9E9E",
            }}
          >
            All rights reserved © 2026 Sayyed Amaan Ali
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.8125rem",
              color: "#9E9E9E",
            }}
          >
            {DEVELOPER_INFO.email}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
