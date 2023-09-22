import { FC } from "react";

import { Box } from "../ui/Box";
import { IconButton } from "../ui/IconButton";
import { Typography } from "../ui/Typography";

import { CloseCircleIcon } from "../icons/CloseCircleIcon";

import { styles } from "./styles";

import TagManager from "react-gtm-module";

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
          TagManager.dataLayer({
            dataLayer: {
              event: "chat_closed",
            },
          });
        }}
      >
        <CloseCircleIcon size="md" />
      </IconButton>
    </Box>
  );
};
