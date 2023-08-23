import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100vw",
    height: "100vh",
    bgcolor: "custom.gray",
    position: "fixed",
    top: 0,
    [basicTheme.breakpoints.up("tablet")]: {
      width: 540,
      height: 584,
      top: "unset",
      bottom: 100,
      right: 40,
    },
  },
};
