import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { Message } from "../../types/api";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";


const MainPage: FC = () => {
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);

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
    // setIsLoading(true);
    if (enteredTextMessage !== "") {
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
        setActiveSendRequest(false);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [enteredTextMessage, authorizationToken, websiteId]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const getHistory = useCallback(async () => {
    // setIsLoading(true);
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
      console.log(responseData);
      setMessageHistory(responseData.data.messages.items);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId]);

  // for GET request for history
  useEffect(() => {
    console.log("load");
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
