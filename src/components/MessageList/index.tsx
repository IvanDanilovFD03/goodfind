import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { List } from "../ui/List";
import { ListItem } from "../ui/ListItem";

import { styles } from "./styles";
import { Message } from "../Message";
import { Message as MessageProps } from "../../types/api";

export interface MessageListProps {
  messages: MessageProps[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List sx={styles.root}>
      {messages
        .map((message) => (
          <ListItem
            sx={styles.listItem}
            key={`${message.role + message.content + Math.random()}`}
          >
            <Message messageContent={message} />
          </ListItem>
        ))
        .reverse()}
    </List>
  );
};
