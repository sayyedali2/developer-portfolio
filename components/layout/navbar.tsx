"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NAV_LINKS, DEVELOPER_INFO } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isScrolled ? "rgba(7, 8, 10, 0.94)" : "rgba(7, 8, 10, 0.65)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
          transition: "all 0.25s ease",
          zIndex: 1100,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            {/* Logo / Brand Mark - Afterglow Studio style */}
            <Box
              component="a"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#E87A1E", // Solid Saffron accent dot
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "0.9375rem", sm: "1.0625rem" },
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                Sayyed Amaan Ali
              </Typography>
            </Box>

            {/* Desktop Navigation Links - Afterglow Clean Typography */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3.5,
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Box
                    key={link.name}
                    component="a"
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    sx={{
                      position: "relative",
                      py: 0.5,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "#FFFFFF" : "#9E9E9E",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: "1px",
                          backgroundColor: "#E87A1E",
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Desktop Right CTA - Afterglow Pill Button */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleNavClick("#contact")}
                sx={{
                  backgroundColor: "#E87A1E",
                  color: "#000000",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  px: 3.25,
                  py: 1,
                  borderRadius: 999,
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#D16B15",
                    boxShadow: "none",
                  },
                }}
              >
                Let&apos;s Talk
              </Button>
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: "#FFFFFF",
                p: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer - Clean Minimal Afterglow styling */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: "#07080A",
              borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Sayyed Amaan Ali
              </Typography>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: "#FFFFFF" }}
              aria-label="close drawer"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ p: 0 }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <ListItem key={link.name} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 1,
                      backgroundColor: isActive ? "rgba(232, 122, 30, 0.1)" : "transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "#E87A1E" : "#FFFFFF",
                      }}
                    >
                      {link.name}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box sx={{ pt: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleNavClick("#contact")}
            sx={{
              backgroundColor: "#E87A1E",
              color: "#000000",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              py: 1.5,
              borderRadius: 999,
              mb: 2,
              "&:hover": {
                backgroundColor: "#D16B15",
              },
            }}
          >
            Let&apos;s Talk
          </Button>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.8125rem",
              color: "#9E9E9E",
              textAlign: "center",
            }}
          >
            {DEVELOPER_INFO.email}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
