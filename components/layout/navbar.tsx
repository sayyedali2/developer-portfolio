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
  useScrollTrigger,
  LinearProgress,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, DEVELOPER_INFO } from "@/lib/constants";

const MotionBox = motion.create(Box);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          transition: "all 0.3s ease",
          pt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              px: { xs: 2, md: 4 },
              borderRadius: "12px",
              bgcolor: trigger ? "rgba(255, 255, 255, 0.9)" : "transparent",
              backdropFilter: trigger ? "blur(12px)" : "none",
              border: trigger ? "1px solid var(--border)" : "1px solid transparent",
              transition: "all 0.2s ease",
              boxShadow: trigger ? "0 4px 20px rgba(0, 0, 0, 0.02)" : "none",
            }}
          >
            {/* Logo */}
            <MotionBox
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "var(--foreground)",
                cursor: "pointer",
                letterSpacing: "-0.02em",
              }}
              onClick={() => handleNavClick("#home")}
            >
              {DEVELOPER_INFO.name.split(" ")[0]}
              <Box component="span" sx={{ color: "var(--muted-foreground)" }}>
                .
              </Box>
            </MotionBox>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <MotionBox
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Box
                    component="a"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    href={link.href}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: activeSection === link.href.replace("#", "")
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
                      bgcolor: activeSection === link.href.replace("#", "")
                        ? "var(--secondary)"
                        : "transparent",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "var(--foreground)",
                        bgcolor: "var(--secondary)",
                      },
                    }}
                  >
                    {link.name}
                  </Box>
                </MotionBox>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "var(--foreground)" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>

        {/* Scroll Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            bgcolor: "transparent",
            "& .MuiLinearProgress-bar": {
              background: "var(--foreground)",
            },
          }}
        />
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 320,
            bgcolor: "var(--background)",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "var(--foreground)" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          <AnimatePresence>
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      borderRadius: "6px",
                      bgcolor: activeSection === link.href.replace("#", "")
                        ? "var(--secondary)"
                        : "transparent",
                      "&:hover": {
                        bgcolor: "var(--secondary-dark)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontWeight: activeSection === link.href.replace("#", "") ? 600 : 500,
                            color: activeSection === link.href.replace("#", "")
                              ? "var(--foreground)"
                              : "var(--muted-foreground)",
                          }}
                        >
                          {link.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
      </Drawer>
    </>
  );
}
