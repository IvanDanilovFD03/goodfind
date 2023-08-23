import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Header } from "../Header";
import { MessageList } from "../MessageList";
import { UserMessage } from "../../types/api";
import { AIMessage } from "../../types/api";

export interface MessageWidgetProps {
  widgetTitle: string;
  messageWidgetOpen: boolean;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
  messages: Array<UserMessage | AIMessage>;
}

export const MessageWidget: FC<MessageWidgetProps> = ({
  widgetTitle,
  messageWidgetOpen,
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
