import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Typography } from "@mui/material";

export interface RequestPanelProps {}

export const RequestPanel: FC<RequestPanelProps> = ({}) => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h1" color="custom.white">
        REQUEST PANEL
      </Typography>
    </Box>
  );
};
