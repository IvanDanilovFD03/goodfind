import { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Box } from "./components/ui/Box";
import MainPage from "./pages/MainPage/MainPage";
import TagManager from "react-gtm-module";

interface AppProps {
  authorizationToken: string;
  websiteId: string;
  gtmId: string;
}

const App: FC<AppProps> = ({ authorizationToken, websiteId, gtmId }) => {
  const tagManagerArgs = {
    gtmId: gtmId,
    events: {
      "chat_opened": "chat_opened",
      "chat_closed": "chat_closed",
      "question_asked": "question_asked",
      "link_tapped": "link_tapped",
    },
  };
  TagManager.initialize(tagManagerArgs);

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
