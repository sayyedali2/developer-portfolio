"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E87A1E", // Rich Saffron accent
      light: "#F08D38",
      dark: "#D16B15",
      contrastText: "#000000",
    },
    secondary: {
      main: "#18181A",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#07080A",
      paper: "#0E1015",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "4rem", // 64px on desktop (Afterglow exact size)
      fontWeight: 400, // Afterglow's signature regular weight
      letterSpacing: "-0.02em",
      lineHeight: 1.25,
    },
    h2: {
      fontSize: "3.5rem", // 56px
      fontWeight: 400,
      letterSpacing: "-0.02em",
      lineHeight: 1.25,
    },
    h3: {
      fontSize: "2.75rem", // 44px
      fontWeight: 400,
      letterSpacing: "-0.015em",
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "2rem", // 32px
      fontWeight: 400,
      letterSpacing: "-0.01em",
      lineHeight: 1.35,
    },
    h5: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      lineHeight: 1.45,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "#9E9E9E",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#9E9E9E",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 999, // Afterglow signature pill button shape
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 999, // Afterglow signature pill
          padding: "14px 36px",
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#E87A1E",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#D16B15",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.3)",
          color: "#FFFFFF",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#FFFFFF",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
  },
});
