import { createTheme as createMuiTheme } from "@mui/material/styles";

const THEME = {
  dark: {
    mode: "dark",
    primary: "#B6FF4D",
    secondary: "#FF4D6D",
    background: "#070A0F",
    surface: "#0B1220",
    cardBg: "#0E1728",
    text: "#F6F2E9",
    textSecondary: "#BDB6AD",
    border: "#26304A",
    grid: "rgba(246, 242, 233, 0.06)",
    glowPrimary: "rgba(182, 255, 77, 0.18)",
    glowSecondary: "rgba(255, 77, 109, 0.14)",
    shadow: "0 30px 90px rgba(0, 0, 0, 0.55)",
  },
  light: {
    mode: "light",
    primary: "#1B5BFF",
    secondary: "#FF2E55",
    background: "#F6F2E9",
    surface: "#FFFFFF",
    cardBg: "#FFFFFF",
    text: "#0B0F17",
    textSecondary: "#545A66",
    border: "#D8D2C9",
    grid: "rgba(11, 15, 23, 0.06)",
    glowPrimary: "rgba(27, 91, 255, 0.16)",
    glowSecondary: "rgba(255, 46, 85, 0.12)",
    shadow: "0 28px 80px rgba(11, 15, 23, 0.22)",
  },
};

export const getThemeTokens = (mode) => THEME[mode] ?? THEME.dark;

export const applyThemeToCssVars = (tokens) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dataset.theme = tokens.mode;

  root.style.setProperty("--bg", tokens.background);
  root.style.setProperty("--surface", tokens.surface);
  root.style.setProperty("--card", tokens.cardBg);
  root.style.setProperty("--text", tokens.text);
  root.style.setProperty("--muted", tokens.textSecondary);
  root.style.setProperty("--primary", tokens.primary);
  root.style.setProperty("--secondary", tokens.secondary);
  root.style.setProperty("--border", tokens.border);
  root.style.setProperty("--grid", tokens.grid);
  root.style.setProperty("--glow-primary", tokens.glowPrimary);
  root.style.setProperty("--glow-secondary", tokens.glowSecondary);
  root.style.setProperty("--shadow", tokens.shadow);
};

export const getMuiTheme = (tokens) =>
  createMuiTheme({
    palette: {
      mode: tokens.mode,
      primary: { main: tokens.primary },
      secondary: { main: tokens.secondary },
      background: {
        default: tokens.background,
        paper: tokens.surface,
      },
      text: {
        primary: tokens.text,
        secondary: tokens.textSecondary,
      },
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily:
        '"Spline Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: {
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        letterSpacing: "-0.04em",
      },
      h2: {
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        letterSpacing: "-0.03em",
      },
      h3: {
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        letterSpacing: "-0.02em",
      },
      h4: {
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        letterSpacing: "-0.01em",
      },
      button: {
        textTransform: "none",
        fontWeight: 650,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { colorScheme: "dark light" },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
          },
        },
      },
    },
  });

