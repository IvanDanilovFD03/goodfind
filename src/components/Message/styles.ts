import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100%",
  },
  userMessage: {
    py: 3,
    px: 6,
    display: "flex",
  },
  userText: {
    bgcolor: "custom.black",
    width: 300,
    py: 4,
    px: 6,
    ml: "auto",
  },
  aiMessageContainer: {
    py: 3,
    px: 6,
  },
  aiMessage: {
    display: "flex",
    columnGap: 4,
    alignItems: "center",
  },
  aiMessageText: {
    bgcolor: "custom.white",
    width: "100%",
    p: 4,
  },
  aiIcon: {
    width: 44,
    height: 44,
    alignSelf: "start",
    bgcolor: "custom.green",
  },
  productList: {
    p: 0,
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
    width: "100%",
  },
  productListItem: {
    p: 0,
    width: "100%",
  },
};
