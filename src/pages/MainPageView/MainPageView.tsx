import { FC, useState, useEffect } from "react";

import { Box } from "../../components/ui/Box";
import { MessageWidget } from "../../components/MessageWidget";
import { RequestPanel } from "../../components/RequestPanel";

import { Message } from "../../types/api";

import { styles } from "./styles";

interface MainPageViewProps {
  messages: Message[];
  setEnteredTextMessage: (value: React.SetStateAction<string>) => void;
  activeSendRequest: boolean;
  setActiveSendRequest: (value: React.SetStateAction<boolean>) => void;
  greeting: string;
}

export const MainPageView: FC<MainPageViewProps> = ({
  messages,
  setEnteredTextMessage,
  activeSendRequest,
  setActiveSendRequest,
  greeting,
}) => {
  const [messageWidgetOpen, setMessageWidgetOpen] = useState(false);
  useEffect(() => {
    if (messageWidgetOpen && document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      if (element) {
        element.scrollTo({
          top: element.scrollHeight,
        });
      }
    }
    if (messageWidgetOpen) {
      window._paq.push(["trackEvent", "Open Widget", "Open"]);
    }
  }, [messageWidgetOpen]);

  return (
    <Box sx={styles.root}>
      {messageWidgetOpen && (
        <MessageWidget
          widgetTitle="HOMEGROWN CHAT"
          setMessageWidgetOpen={setMessageWidgetOpen}
          messages={messages}
        />
      )}
      <RequestPanel
        setEnteredTextMessage={setEnteredTextMessage}
        activeSendRequest={activeSendRequest}
        setActiveSendRequest={setActiveSendRequest}
        messageWidgetOpen={messageWidgetOpen}
        setMessageWidgetOpen={setMessageWidgetOpen}
        greeting={greeting}
      />
    </Box>
  );
};
