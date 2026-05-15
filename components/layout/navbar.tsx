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
import { motion, AnimatePresence, Variants } from "framer-motion";
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
          bgcolor: trigger ? "rgba(10, 10, 15, 0.9)" : "transparent",
          backdropFilter: trigger ? "blur(20px)" : "none",
          borderBottom: trigger ? "1px solid rgba(139, 92, 246, 0.1)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 2,
            }}
          >
            {/* Logo */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                cursor: "pointer",
              }}
              onClick={() => handleNavClick("#home")}
            >
              {DEVELOPER_INFO.name.split(" ")[0]}
              <Box component="span" sx={{ color: "#06B6D4", WebkitTextFillColor: "#06B6D4" }}>
                .
              </Box>
            </MotionBox>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <MotionBox
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                      borderRadius: 2,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: activeSection === link.href.replace("#", "")
                        ? "#8B5CF6"
                        : "text.secondary",
                      bgcolor: activeSection === link.href.replace("#", "")
                        ? "rgba(139, 92, 246, 0.1)"
                        : "transparent",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#8B5CF6",
                        bgcolor: "rgba(139, 92, 246, 0.1)",
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
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
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
              background: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
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
            bgcolor: "#0A0A0F",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      borderRadius: 2,
                      bgcolor: activeSection === link.href.replace("#", "")
                        ? "rgba(139, 92, 246, 0.1)"
                        : "transparent",
                      "&:hover": {
                        bgcolor: "rgba(139, 92, 246, 0.1)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontWeight: activeSection === link.href.replace("#", "") ? 600 : 400,
                            color: activeSection === link.href.replace("#", "")
                              ? "#8B5CF6"
                              : "text.primary",
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
