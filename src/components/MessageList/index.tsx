import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";

export interface MessageListProps {}

export const MessageList: FC<MessageListProps> = ({}) => {
  return <Box sx={styles.root}></Box>;
};
