import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";

export interface ProductCardProps {}

export const ProductCard: FC<ProductCardProps> = ({}) => {
  return <Box sx={styles.root}></Box>;
};
