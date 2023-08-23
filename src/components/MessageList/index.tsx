import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { List } from "../ui/List";
import { ListItem } from "../ui/ListItem";

import { styles } from "./styles";
import { Message } from "../Message";
import { UserMessage } from "../../types/api";
import { AIMessage } from "../../types/api";

export interface MessageListProps {
  messages: Array<UserMessage | AIMessage>;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List sx={styles.root}>
      {messages.map((message) => (
        <ListItem sx={styles.listItem}>
          <Message author={message.author} text={message.text} />
        </ListItem>
      ))}
    </List>
  );
};
