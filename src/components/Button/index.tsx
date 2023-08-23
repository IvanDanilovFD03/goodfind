import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";

export interface ButtonProps {}

export const Button: FC<ButtonProps> = ({}) => {
  return <Box sx={styles.root}></Box>;
};
