import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Avatar } from "../ui/Avatar";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Typography } from "../ui/Typography";
import userImage from "../app/userImage/userImage.png";
import { MessageIcon } from "../icons/MessageIcon";
import { SxProps } from "@mui/material";

export interface MessageProps {
  author: "user" | "ai";
  text: string;
}

export const Message: FC<MessageProps> = ({ author, text }) => {
  const messageStyle = (author: "user" | "ai"): SxProps =>
    author === "user"
      ? ({
          ...styles.message,
          ...styles.userMessage,
        } as SxProps)
      : ({
          ...styles.message,
          ...styles.aiMessage,
        } as SxProps);

  const iconStyle = (author: "user" | "ai"): SxProps =>
    author === "user"
      ? ({
          ...styles.authorIcon,
        } as SxProps)
      : ({
          ...styles.authorIcon,
          ...styles.aiIcon,
        } as SxProps);

  return (
    <Box sx={styles.root}>
      {author === "user" ? (
        <Box sx={messageStyle(author)}>
          <Avatar
            alt="user image"
            variant="square"
            src={userImage}
            sx={iconStyle(author)}
          />
          <Typography variant="textMessage" sx={styles.userText}>
            {text}
          </Typography>
        </Box>
      ) : (
        <Box sx={messageStyle(author)}>
          <Avatar alt="ai image" variant="square" sx={iconStyle(author)}>
            <MessageIcon size="md" />
          </Avatar>
          <Typography variant="textMessage" sx={styles.userText}>
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
