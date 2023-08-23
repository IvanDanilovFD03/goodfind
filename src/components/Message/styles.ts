import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100%",
  },
  userMessage: {
    p: 6,
    display: "flex",
    columnGap: 4,
    bgcolor: "custom.white",
    alignItems: "center",
  },
  authorIcon: {
    width: 44,
    height: 44,
    alignSelf: "start",
  },
};
