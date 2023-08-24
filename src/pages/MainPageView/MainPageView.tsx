import { FC, useState } from "react";

import { styles } from "./styles";
import { Box } from "../../components/ui/Box";
import { Typography } from "../../components/ui/Typography";
import { MessageWidget } from "../../components/MessageWidget";
import { RequestPanel } from "../../components/RequestPanel";
import { Message } from "../../types/api";

interface MainPageViewProps {
  messages: Message[];
}

export const MainPageView: FC<MainPageViewProps> = ({ messages }) => {
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
      <RequestPanel />
    </Box>
  );
};
