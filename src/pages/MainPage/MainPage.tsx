import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";

import { Message, Product } from "../../types/api";

import Echo from "laravel-echo";

interface MainPageProps {
  authorizationToken: string;
  websiteId: string;
  sessionToken: string;
}

const Pusher = require("pusher-js");

const MainPage: FC<MainPageProps> = ({
  authorizationToken,
  websiteId,
  sessionToken,
}) => {
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [greeting, setGreeting] = useState("");
  const [websocketProducts, setWebsocketProducts] = useState<Product[]>([]);

  const scrollMessageList = () => {
    if (document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      if (element) {
        element.scrollTo({
          top: element.scrollHeight,
        });
      }
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
      .channel(sessionToken)
      .listen("ProductsFound", (response: { products: Product[] }) => {
        setWebsocketProducts(response.products);
        window._paq.push([
          "trackEvent",
          "GoodFindChat",
          "Products received",
          response.products,
        ]);
      });
  }, [messageHistory, sessionToken]);

  const sendRequest = useCallback(async () => {
    messageHistory.unshift({ role: 1, content: enteredTextMessage });
    messageHistory.unshift({
      role: 2,
      content: "loadingAnswer",
      products: "loadingProducts",
    });
    setTimeout(() => {
      scrollMessageList();
    }, 0);
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
            session_token: sessionToken,
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
      window._paq.push([
        "trackEvent",
        "GoodFindChat",
        "Answer received",
        responseInfo.data.content,
      ]);
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
    sessionToken,
  ]);

  useEffect(() => {
    if (enteredTextMessage !== "") {
      window._paq.push([
        "trackEvent",
        "GoodFindChat",
        "Question asked",
        enteredTextMessage,
      ]);
      sendRequest();
    }
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
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search/history?session_token=${sessionToken}`,
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
  }, [authorizationToken, websiteId, sessionToken, greeting]);

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
  }, [getHistory]);

  useEffect(() => {
    getGreeting();
  }, [getGreeting]);

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
