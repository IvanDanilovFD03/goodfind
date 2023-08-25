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
    boxShadow: "20px 0px 16px 0px rgba(0, 0, 0, 0.25)",
    p: "10px",
    columnGap: 2,
    [basicTheme.breakpoints.up("tablet")]: {
      width: 540,
      bottom: 100,
      right: 40,
    },
  },
  sendButton: {
    bgcolor: "custom.green",
    p: "8.533px",
    borderRadius: 0,
    "&:hover": {
      bgcolor: "custom.gray",
    },
  },
  disabledSendButton: {
    "&.Mui-disabled": {
      bgcolor: "custom.gray",
    },
  },
  input: {
    border: "1px solid #DADADA",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  inputBase: {
    width: "90%",
    color: "custom.white",
    input: {
      px: 4,
      py: 2,
    },
    "&:after": {
      borderBottom: "none",
    },
  },
  sendButtonIcon: {
    fill: "none",
  },
  emojiButton: {
    ml: "auto",
    mr: 4,
  },
  emojiPicker: {
    position: "absolute",
    top: -350,
    right: 60,
  },
};
