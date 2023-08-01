import { useThemeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard } from "./pages";
import "./App.css";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
