import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { styles } from "./styles";
import { Header } from "../Header";

export interface MessageWidgetProps {
  widgetTitle: string;
  messageWidgetOpen: boolean;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
}

export const MessageWidget: FC<MessageWidgetProps> = ({
  widgetTitle,
  messageWidgetOpen,
  setMessageWidgetOpen,
}) => {
  return (
    <Box sx={styles.root}>
      <Header title={widgetTitle} setMessageWidgetOpen={setMessageWidgetOpen} />
    </Box>
  );
};
