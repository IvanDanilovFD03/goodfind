import { FC, useState, useEffect } from "react";

import { styles } from "./styles";
import { Box } from "../../components/ui/Box";
import { MessageWidget } from "../../components/MessageWidget";
import { RequestPanel } from "../../components/RequestPanel";
import { Message } from "../../types/api";

interface MainPageViewProps {
  messages: Message[];
  setEnteredTextMessage: (value: React.SetStateAction<string>) => void;
  activeSendRequest: boolean;
  setActiveSendRequest: (value: React.SetStateAction<boolean>) => void;
}

export const MainPageView: FC<MainPageViewProps> = ({
  messages,
  setEnteredTextMessage,
  activeSendRequest,
  setActiveSendRequest,
}) => {
  const [messageWidgetOpen, setMessageWidgetOpen] = useState(false);
  useEffect(() => {
    if (messageWidgetOpen && document.getElementById("messagesList")) {
      const element = document.getElementById("messagesList");
      element &&
        element.scrollTo({
          top: element.scrollHeight,
        });
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
      />
    </Box>
  );
};
