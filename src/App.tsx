import { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Box } from "./components/ui/Box";
import MainPage from "./pages/MainPage/MainPage";

const App: FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </Box>
  );
};

export default App;
