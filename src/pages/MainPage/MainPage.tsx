import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { Message } from "../../types/api";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

const MainPage: FC = () => {
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  
  // http://localhost:3000/?authorization_token=3|1HyGQZJmgrIsrMwnYXcQvNJWycjbvn74vgwLFRuw&website_id=9
  const windowLink = new URL(window.location.href);
  const authorizationToken = windowLink.searchParams.get("authorization_token");
  const websiteId = windowLink.searchParams.get("website_id");

  const createSessionToken = () => {
    if (Cookies.get("session_token")) {
      const token = Cookies.get("session_token");
      return token;
    }
    const token = uuidv4();
    Cookies.set("session_token", `${token}`, { expires: 7 });
    return token;
  };

  const sendRequest = useCallback(async () => {
    if (enteredTextMessage !== "") {
      messageHistory.unshift({ role: 1, content: enteredTextMessage });
      setLoadingAnswer(true);
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
          setLoadingAnswer(false);
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
        setLoadingAnswer(false);
        messageHistory.splice(1, 1);
      } catch (error) {
        setLoadingAnswer(false);
        messageHistory.splice(0, 1);
        messageHistory.unshift({
          role: 2,
          content: "Ooops...Something went wrong!",
        });
        setActiveSendRequest(false);
      }
    }
  }, [enteredTextMessage, authorizationToken, websiteId, messageHistory]);

  useEffect(() => {
    sendRequest();
    if (document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      element &&
        element.scrollTo({
          top: element.scrollHeight,
        });
    }
  }, [sendRequest, loadingAnswer, messageHistory]);

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
  }, [authorizationToken, websiteId]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return (
    <MainPageView
      messages={messageHistory}
      setEnteredTextMessage={setEnteredTextMessage}
      activeSendRequest={activeSendRequest}
      setActiveSendRequest={setActiveSendRequest}
    />
  );
};

export default MainPage;
