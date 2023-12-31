import { FC } from "react";

import { Box } from "../ui/Box";
import { Header } from "../Header";
import { MessageList } from "../MessageList";

import { Message } from "../../types/api";

import { styles } from "./styles";

export interface MessageWidgetProps {
  widgetTitle: string;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
  messages: Message[];
}

export const MessageWidget: FC<MessageWidgetProps> = ({
  widgetTitle,
  setMessageWidgetOpen,
  messages,
}) => {
  return (
    <Box sx={styles.root}>
      <Header title={widgetTitle} setMessageWidgetOpen={setMessageWidgetOpen} />
      <MessageList messages={messages} />
    </Box>
  );
};
