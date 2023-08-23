import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Avatar } from "../ui/Avatar";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Typography } from "../ui/Typography";
import userImage from "../app/userImage/userImage.png";

export interface MessageProps {
  author: "user" | "ai";
  text: string;
}

export const Message: FC<MessageProps> = ({ author, text }) => {
  return (
    <Box sx={styles.root}>
      {author === "user" && (
        <Box sx={styles.userMessage}>
          <Avatar alt="user image" variant="square" src={userImage} sx={styles.authorIcon}/>
          <Typography variant="textMessage" sx={styles.userText}>
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
