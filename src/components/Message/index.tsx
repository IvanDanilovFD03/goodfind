import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";

export interface MessageProps {}

export const Message: FC<MessageProps> = ({}) => {
  return <Box sx={styles.root}></Box>;
};
