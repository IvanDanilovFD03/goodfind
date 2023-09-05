import { FC, ReactNode } from "react";

import { List } from "../ui/List";
import { ListItem } from "../ui/ListItem";
import { Message } from "../Message";

import { styles } from "./styles";

import { Message as MessageProps } from "../../types/api";

import { v4 as uuidv4 } from "uuid";

export interface MessageListProps {
  messages: MessageProps[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  const addListItem = () => {
    const listItems: ReactNode[] = [];
    messages.map((message) =>
      listItems.push(<Message messageContent={message} />)
    );
    return listItems.reverse();
  };

  const messagesList = addListItem();

  if (document.getElementById("messagesList")) {
    const element = document.getElementById("messagesList");
    element &&
      element.scrollTo({
        top: element.scrollHeight,
      });
  }

  return (
    <List sx={styles.root} id="messagesList">
      {messagesList.map((message) => (
        <ListItem sx={styles.listItem} key={`${uuidv4()}`}>
          {message}
        </ListItem>
      ))}
    </List>
  );
};
