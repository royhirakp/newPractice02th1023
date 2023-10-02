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
      },
      secondary: {
        main: darkMode ? "#12435f" : "#93e994",
      },
      background: {
        default: darkMode ? "#0b293a" : "#b2d9ef",
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
            fontSize: "11px",
            textTransform: "none",
            "@media (min-width:600px)": {
              fontSize: "12px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:960px)": {
              fontSize: "15px", // Adjust font size for screens with a minimum width of 960px (md)
            },
            "@media (min-width:1280px)": {
              fontSize: "18px", // Adjust font size for screens with a minimum width of 1280px (lg)
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
