import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    bgcolor: "custom.black",
    height: 60,
    width: "100vw",
    position: "absolute",
    bottom: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [basicTheme.breakpoints.up("tablet")]: {
      width: 540,
      bottom: 100,
      right: 40,
    },
  },
};
