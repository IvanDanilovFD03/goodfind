import { SxStyles } from "../../types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    columnGap: 4,
    alignItems: "end",
  },
  icon: {
    bgcolor: "custom.green",
    p: "8.533px",
    borderRadius: 0,
    boxShadow: "5px 5px 10px 0px rgba(54, 131, 83, 0.50)",
  },
  text: {
    bgcolor: "custom.black",
    height: 89,
    width: "100%",
    display: "flex",
    py: 3,
    pl: 3,
    pr: 6,
    position: "relative",
    mb: 1,
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: -2,
      left: -8,
      height: 0,
      transform: "rotate(-9deg)",
      borderStyle: "solid",
      borderWidth: "0 12px 24px 12px",
      borderColor: "transparent transparent #000000 transparent",
    },
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 16,
    height: 16,
  },
  closeIcon: {
    fontSize: 16,
    color: "custom.white"
  },
};
