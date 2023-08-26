import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100%",
    p: 0,
    height: "calc(100vh - 44px - 100px)",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: 6,
    },
    "::-webkit-scrollbar-track": {
      bgcolor: "custom.white",
    },
    "::-webkit-scrollbar-thumb": {
      bgcolor: "#D0D0D0",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
    [basicTheme.breakpoints.up("tablet")]: {
      height: "calc(70vh - 44px)",
    },
  },
  listItem: {
    p: 0,
    width: "100%",
  },
};
