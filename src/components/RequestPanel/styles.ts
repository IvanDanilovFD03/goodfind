import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    zIndex: 10000000000,
    bgcolor: "custom.black",
    height: 60,
    minHeight: 60,
    maxHeight: 60,
    width: "100vw",
    position: "fixed",
    bottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "20px 0px 16px 0px rgba(0, 0, 0, 0.25)",
    p: "10px",
    columnGap: 2,
    [basicTheme.breakpoints.up("tablet")]: {
      width: 540,
      left: 40,
    },
    [basicTheme.breakpoints.up("laptop")]: {
      bottom: 25,
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
    width: "100%",
    color: "custom.white",
    fontSize: 12,
    textarea: {
      height: "16px !important",
      maxHeight: "16px !important",
      py: 2,
      px: 4,
      fontFamily: "Inter",
      "&::placeholder": {
        fontFamily: "DrukWideBold",
      },
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    "&:after": {
      borderBottom: "none",
    },
    [basicTheme.breakpoints.up("tablet")]: {
      width: "90%",
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
  rootClose: {
    bgcolor: "custom.black",
    height: 60,
    width: 155,
    position: "fixed",
    zIndex: 10000,
    bottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    p: "10px",
    columnGap: 2,
    borderRadius: 0,
    "&:hover": {
      bgcolor: "custom.black",
    },
    [basicTheme.breakpoints.up("tablet")]: {
      left: 40,
    },
    [basicTheme.breakpoints.up("laptop")]: {
      bottom: 25,
    },
  },
  logoIcon: {
    bgcolor: "custom.green",
    p: "8.533px",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    rowGap: 1,
  },
  greetingMessage: {
    position: "absolute",
    width: "100%",
    top: -109,
    right: 0,
  },
};
