import { useThemeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient();


function App() {
  const { theme } = useThemeContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
