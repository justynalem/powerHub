import { useState } from "react";
import { useThemeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard, Toggle } from "./components";
import "./App.css";
import { Drawer } from "./ui";


function App() {
  const { theme } = useThemeContext();
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
