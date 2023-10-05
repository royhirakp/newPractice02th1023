import { Box, CssBaseline, Paper } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
interface ContainerProps {
  children: ReactNode;
}

const ThemeProvidor: React.FC<ContainerProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#a8acd1" : "#2433bc",
        light: !darkMode ? "#5eabb2d1" : "#2b3c4f",
        dark: "#ffff",
        contrastText: "#ffff",
      },
      secondary: {
        main: darkMode ? "#12435f" : "#93e994",
        light: darkMode ? "#676464" : "#dcd5d5",
        dark: darkMode ? "#9b9c9d" : "#f0f8ff",
        contrastText: "#ffff",
      },
      text: {
        primary: darkMode ? "#ffff" : "#424452",
        secondary: !darkMode ? "#5eabb2d1" : "#2b3c4f",
        disabled: "#ffff",
      },
      error: {
        main: darkMode ? "#0b293a" : "#b2d9ef",
        light: darkMode ? "#0b293a" : "#b2d9ef",
      },
      background: {
        default: darkMode ? "#0b293a" : "#b2d9ef",
        paper: darkMode ? "#2a2828" : "#d9d4d4 ",
      },
    },
    typography: {
      fontFamily: "inherit",

      h2: {
        fontSize: "30px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "33px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "35px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "40px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
      body2: {
        fontSize: "10px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "9px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "13px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "14px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
      body1: {
        fontSize: "10px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "10px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "11px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "12px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "8px",
            "@media (min-width:279px)": {
              fontSize: "8px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:600px)": {
              fontSize: "10px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:960px)": {
              fontSize: "13px", // Adjust font size for screens with a minimum width of 960px (md)
            },
            "@media (min-width:1280px)": {
              fontSize: "14px", // Adjust font size for screens with a minimum width of 1280px (lg)
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ebecf3" : "#2a2a2b",
          },
        },
      },
    },
  });
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;