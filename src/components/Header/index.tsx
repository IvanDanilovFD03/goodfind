import { FC } from "react";
import { Box } from "../ui/Box";
import { Typography } from "../ui/Typography";

import { styles } from "./styles";
import { IconButton } from "../ui/IconButton";
import { CancelIcon } from "../icons/CancelIcon";

export interface MessageWidgetProps {
  title: string;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
}

export const Header: FC<MessageWidgetProps> = ({
  title,
  setMessageWidgetOpen,
}) => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h3" color="custom.white">
        {title}
      </Typography>
      <IconButton onClick={() => setMessageWidgetOpen(false)}>
        <CancelIcon size="md" />
      </IconButton>
    </Box>
  );
};
