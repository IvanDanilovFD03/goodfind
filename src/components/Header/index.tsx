import { FC } from "react";

import { Box } from "../ui/Box";
import { IconButton } from "../ui/IconButton";
import { Typography } from "../ui/Typography";

import { CloseCircleIcon } from "../icons/CloseCircleIcon";

import { styles } from "./styles";

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
      <Typography variant="textMessage" color="custom.white">
        {title}
      </Typography>
      <IconButton
        onClick={() => {
          setMessageWidgetOpen(false);
          window._paq.push(["trackEvent", "Chat closed", "Closed"]);
        }}
      >
        <CloseCircleIcon size="md" />
      </IconButton>
    </Box>
  );
};
