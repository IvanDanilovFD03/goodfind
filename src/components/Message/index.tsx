import { FC } from "react";
import { Avatar } from "../ui/Avatar";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Typography } from "../ui/Typography";
import { MessageIcon } from "../icons/MessageIcon";
import { Message as MessageApi } from "../../types/api";
import { MessageCard } from "../MessageCard";

export interface MessageProps {
  messageContent: MessageApi;
}

export const Message: FC<MessageProps> = ({ messageContent }) => {
  const { role, content, products } = messageContent;

  return (
    <Box sx={styles.root}>
      {role === 1 ? (
        <Box sx={styles.userMessage}>
          <Typography
            variant="textMessage"
            color="custom.white"
            sx={styles.userText}
          >
            {content}
          </Typography>
        </Box>
      ) : (
        <Box sx={styles.aiMessageContainer}>
          <Box sx={styles.aiMessage}>
            <Avatar alt="ai image" variant="square" sx={styles.aiIcon}>
              <MessageIcon size="md" />
            </Avatar>
            <Box sx={styles.aiMessageText}>
              <MessageCard text={content} products={products} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
