"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#416957",
      dark: "#2D4F3F",
      light: "#E9EEE5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#AF8962",
    },
    background: {
      default: "#FAF8F3",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#263C34",
      secondary: "#69776F",
    },
    divider: "#DFE4DB",
  },

  typography: {
    fontFamily: [
      "Pretendard",
      "Apple SD Gothic Neo",
      "Malgun Gothic",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.05em",
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.045em",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "-0.03em",
    },
    body1: {
      lineHeight: 1.9,
    },
    body2: {
      lineHeight: 1.9,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    overline: {
      fontSize: "0.65rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      lineHeight: 1.8,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 48,
          padding: "12px 22px",
          borderRadius: 8,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "100px",
        },
        body: {
          WebkitFontSmoothing: "antialiased",
        },
        "::selection": {
          backgroundColor: "#D9E4D3",
        },
        "a:focus-visible, button:focus-visible": {
          outline: "3px solid #AF8962",
          outlineOffset: 4,
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: {
            scrollBehavior: "auto",
          },
        },
      },
    },
  },
});

export default theme;
