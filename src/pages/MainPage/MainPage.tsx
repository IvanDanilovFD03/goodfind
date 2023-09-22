import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";

import { Message, Product } from "../../types/api";

import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import Echo from "laravel-echo";

interface MainPageProps {
  authorizationToken: string;
  websiteId: string;
}

const Pusher = require("pusher-js");

const MainPage: FC<MainPageProps> = ({ authorizationToken, websiteId }) => {
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [greeting, setGreeting] = useState("");
  const [websocketProducts, setWebsocketProducts] = useState<Product[]>([]);

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

  const scrollMessageList = () => {
    if (document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      element &&
        element.scrollTo({
          top: element.scrollHeight,
        });
    }
  };

  useEffect(() => {
    const echo = new Echo({
      broadcaster: "pusher",
      key: "1a2b3c4d5e6f7g8h9i",
      wsHost: "ws.goodfind-ai.empat.tech",
      disableStats: true,
    });
    echo
      .channel(createSessionToken())
      .listen("ProductsFound", (response: { products: Product[] }) => {
        setWebsocketProducts(response.products);
      });
  }, [messageHistory, createSessionToken]);

  const sendRequest = useCallback(async () => {
    messageHistory.unshift({ role: 1, content: enteredTextMessage });
    messageHistory.unshift({
      role: 2,
      content: "loadingAnswer",
      products: "loadingProducts",
    });
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
        messageHistory[0].content = "Ooops...Something went wrong!";
        messageHistory[0].products = undefined;
        setActiveSendRequest(false);
        throw new Error("Something went wrong!");
      }
      const responseInfo = await response.json();
      messageHistory[0].content = responseInfo.data.content;
      setActiveSendRequest(false);
    } catch (error) {
      messageHistory[0].content = "Ooops...Something went wrong!";
      setMessageHistory([...messageHistory]);
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

  useEffect(() => {
    if (websocketProducts.length > 0) {
      setMessageHistory((prevMessageHistory) => {
        const updatedMessageHistory = [...prevMessageHistory];
        updatedMessageHistory[0].products = websocketProducts;
        return updatedMessageHistory;
      });
    }
  }, [websocketProducts]);

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
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: 2, content: greeting },
      ]);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId, createSessionToken, greeting]);  

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
      setMessageHistory((prevMessageHistory) => [
        ...prevMessageHistory,
        { role: 2, content: responseData.data.greeting },
      ]);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId]);

  useEffect(() => {
    getHistory();
    getGreeting();
  }, [getHistory, getGreeting]);

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
