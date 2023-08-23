import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100vw",
    height: "100vh",
    bgcolor: "custom.grayLight",
    position: "fixed",
    top: 0,
    [basicTheme.breakpoints.up("tablet")]: {
      width: 540,
      height: 644,
      top: "unset",
      bottom: 160,
      right: 40,
      boxShadow: "20px 0px 16px 0px rgba(0, 0, 0, 0.25)",
    },
  },
};
