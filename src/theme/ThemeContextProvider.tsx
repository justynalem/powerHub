import { Theme, createTheme } from "@mui/material";
import { ReactNode, createContext } from "react";
import { useColorTheme } from ".";

type ThemeContextType = {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
  theme: Theme;
};
type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => null,
  theme: createTheme(),
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

