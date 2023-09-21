import { PaletteMode, createTheme } from '@mui/material';
import { colorVar } from './index';

export const theme = createTheme({
  palette: {
    primary: {
      main: colorVar.lightGreen,
    },
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontSize: 16,
    fontFamily: 'Geologica',
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightBold: 400,
  },
  palette: {
    mode,
    ...(mode === 'light'
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
          info: {
            main: colorVar.infoMain,
            light: colorVar.infoLight,
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
          info: {
            main: colorVar.infoMain,
            light: colorVar.infoLight,
          },
          background: {
            default: colorVar.bgDark,
            paper: colorVar.paperDark,
          },
        }),
  },
});
