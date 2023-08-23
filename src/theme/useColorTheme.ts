import { PaletteMode, createTheme } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { ThemeContext, getDesignTokens } from ".";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };
  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
