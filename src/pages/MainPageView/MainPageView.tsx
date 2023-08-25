import { FC, useState } from "react";

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
  const [messageWidgetOpen, setMessageWidgetOpen] = useState(true); //change it on false when everything will be ready
  return (
    <Box sx={styles.root}>
      {messageWidgetOpen && (
        <MessageWidget
          widgetTitle="HOMEGROWN CHAT"
          messageWidgetOpen={messageWidgetOpen}
          setMessageWidgetOpen={setMessageWidgetOpen}
          messages={messages}
        />
      )}
      <RequestPanel
        setEnteredTextMessage={setEnteredTextMessage}
        activeSendRequest={activeSendRequest}
        setActiveSendRequest={setActiveSendRequest}
      />
    </Box>
  );
};
