import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { Message } from "../../types/api";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

interface MainPageProps {
  authorizationToken: string;
  websiteId: string;
}

const MainPage: FC<MainPageProps> = ({ authorizationToken, websiteId }) => {
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [greeting, setGreeting] = useState("");

  // http://localhost:3000/?authorization_token=3|1HyGQZJmgrIsrMwnYXcQvNJWycjbvn74vgwLFRuw&website_id=9
  // const windowLink = new URL(window.location.href);
  // const authorizationToken = windowLink.searchParams.get("authorization_token");
  // const websiteId = windowLink.searchParams.get("website_id");

  const createSessionToken = useCallback(() => {
    const getCookies = Cookies.get("session_token");
    if (getCookies) {
      const tokensArray = getCookies.split("|");
      const tokenFromCookies =
        tokensArray.length !== 0 &&
        tokensArray.find((element) => {
          const matchResult = element.match(/website_id:(\d+)/);
          return matchResult && matchResult[1] === websiteId;
        });
      if (tokenFromCookies) {
        return tokenFromCookies;
      } else {
        const token = uuidv4();
        const fullToken = `${token}-website_id:${websiteId}`;
        Cookies.set("session_token", `${getCookies}|${fullToken}`, {
          expires: 7,
        });
        return fullToken;
      }
    }
    const token = uuidv4();
    Cookies.set("session_token", `${token}-website_id:${websiteId}`, {
      expires: 7,
    });
    return token;
  }, [websiteId]);  

  const scrollMessageList = () => {
    if (document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      element &&
        element.scrollTo({
          top: element.scrollHeight,
        });
    }
  };

  const sendRequest = useCallback(async () => {
    messageHistory.unshift({ role: 1, content: enteredTextMessage });
    messageHistory.unshift({ role: 2, content: "loadingAnswer" });
    try {
      const response = await fetch(
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorizationToken}`,
          },
          body: JSON.stringify({
            session_token: createSessionToken(),
            content: enteredTextMessage,
          }),
        }
      );

      if (!response.ok) {
        messageHistory.splice(0, 1);
        messageHistory.unshift({
          role: 2,
          content: "Ooops...Something went wrong!",
        });
        setActiveSendRequest(false);
        throw new Error("Something went wrong!");
      }
      const responseInfo = await response.json();
      messageHistory.unshift(responseInfo.data);
      setActiveSendRequest(false);
      messageHistory.splice(1, 1);
    } catch (error) {
      messageHistory.splice(0, 1);
      messageHistory.unshift({
        role: 2,
        content: "Ooops...Something went wrong!",
      });
      setActiveSendRequest(false);
    }
  }, [
    enteredTextMessage,
    authorizationToken,
    websiteId,
    messageHistory,
    createSessionToken,
  ]);

  useEffect(() => {
    if (enteredTextMessage !== "") {
      sendRequest();
    }
    scrollMessageList();
  }, [sendRequest, enteredTextMessage]);

  const getHistory = useCallback(async () => {
    try {
      const response = await fetch(
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search/history?session_token=${createSessionToken()}`,
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
      setMessageHistory(responseData.data.messages.items);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId, createSessionToken]);

  const getGreeting = useCallback(async () => {
    try {
      const response = await fetch(
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search/greeting`,
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
      setGreeting(responseData.data.greeting);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId]);

  useEffect(() => {
    getHistory();
    getGreeting();
  }, [getHistory, getGreeting]);

  useEffect(() => {
    messageHistory.push({ role: 2, content: greeting });
  }, [messageHistory, greeting]);

  return (
    <MainPageView
      messages={messageHistory}
      setEnteredTextMessage={setEnteredTextMessage}
      activeSendRequest={activeSendRequest}
      setActiveSendRequest={setActiveSendRequest}
      greeting={greeting}
    />
  );
};

export default MainPage;
