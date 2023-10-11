import { FC, useCallback, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Box } from "./components/ui/Box";
import MainPage from "./pages/MainPage/MainPage";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

interface AppProps {
  authorizationToken: string;
  websiteId: string;
  visibilityTesting: boolean;
}

const App: FC<AppProps> = ({
  authorizationToken,
  websiteId,
  visibilityTesting,
}) => {
  const [access, setAccess] = useState<boolean>();
  const [sessionToken, setSessionToken] = useState("");

  const createSessionToken = useCallback(() => {
    const getCookies = Cookies.get("session_token");
    if (getCookies) {
      const tokensArray = getCookies.split("|");
      const tokenFromCookies =
        tokensArray.length !== 0 &&
        tokensArray.find((element) => {
          const matchResult = element.match(/website_id_(\d+)/);
          return matchResult && matchResult[1] === websiteId;
        });
      if (tokenFromCookies) {
        return tokenFromCookies;
      } else {
        const token = uuidv4();
        const fullToken = `${token}-website_id_${websiteId}`;
        Cookies.set("session_token", `${getCookies}|${fullToken}`, {
          expires: 7,
        });
        return fullToken;
      }
    }
    const token = uuidv4();
    Cookies.set("session_token", `${token}-website_id_${websiteId}`, {
      expires: 7,
    });
    return token;
  }, [websiteId]);

  const getAccess = useCallback(async () => {
    try {
      const response = await fetch(
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search/has-access?session_token=${createSessionToken()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setAccess(responseData.data);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId, createSessionToken]);

  useEffect(() => {
    setSessionToken(createSessionToken());
    if (visibilityTesting) {
      getAccess();
    } else {
      setAccess(true);
    }
  }, [getAccess, createSessionToken, visibilityTesting]);

  if (access) {
    return (
      <Box>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainPage
            websiteId={websiteId}
            authorizationToken={authorizationToken}
            sessionToken={sessionToken}
          />
        </ThemeProvider>
      </Box>
    );
  }
  return <></>;
};

export default App;
