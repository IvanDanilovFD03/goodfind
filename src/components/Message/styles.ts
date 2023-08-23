import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100%",
  },
  message: {
    p: 6,
    display: "flex",
    columnGap: 4,
    alignItems: "center",
  },
  userMessage: {
    bgcolor: "custom.white",
  },
  aiMessage: {
    bgcolor: "custom.grayLight",
  },
  authorIcon: {
    width: 44,
    height: 44,
    alignSelf: "start",
  },
  aiIcon: {
    bgcolor: "custom.green",
  },
};
