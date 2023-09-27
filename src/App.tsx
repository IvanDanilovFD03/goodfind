import { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Box } from "./components/ui/Box";
import MainPage from "./pages/MainPage/MainPage";
interface AppProps {
  authorizationToken: string;
  websiteId: string;
  gtmId: string;
}

const App: FC<AppProps> = ({ authorizationToken, websiteId, gtmId }) => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage
          websiteId={websiteId}
          authorizationToken={authorizationToken}
        />
      </ThemeProvider>
    </Box>
  );
};

export default App;
