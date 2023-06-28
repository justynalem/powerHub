import { PaletteMode, createTheme } from "@mui/material";
import { colorVar } from "./index";

export const theme = createTheme({
  palette: {
    primary: {
      main: colorVar.lightGreen,
    },
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: colorVar.mediumGreen,
            light: colorVar.lightGreen,
            dark: colorVar.darkGreen,
            contrastText: colorVar.textOnLight,
          },
          secondary: {
            main: colorVar.mediumGreen,
            light: colorVar.lightGreen,
            dark: colorVar.darkGreen,
            contrastText: colorVar.textOnLightContrast,
          },
          background: {
            default: colorVar.bgLight,
            paper: colorVar.paperLight,
          },
        }
      : {
          primary: {
            main: colorVar.mediumGreen,
            light: colorVar.darkGreen,
            dark: colorVar.darkGreen,
            contrastText: colorVar.textOnDark,
          },
          secondary: {
            main: colorVar.mediumGreen,
            light: colorVar.darkGreen,
            dark: colorVar.darkGreen,
            contrastText: colorVar.textOnDarkContrast,
          },
          background: {
            default: colorVar.bgDark,
            // default: "#212121",
            paper: colorVar.paperDark,
          },
        }),
  },
});
