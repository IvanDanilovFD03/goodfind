import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    width: "100%",
    border: 0,
    borderRadius: 0,
    boxShadow: 0,
    overflow: "visible",
  },
  cardContent: {
    p: 0,
    "&:last-child": {
      pb: "0",
    },
  },
  list: {
    p: 0,
  },
  listItem: {
    p: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  listItemTitle: {
    textDecoration: "underline",
  },
  listItemTitleContainer: {
    position: "relative",
  },
  listItemCircle: {
    width: 4,
    height: 4,
    bgcolor: "custom.black",
    position: "absolute",
    top: 7,
    left: -9,
    borderRadius: "50%",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  loadingAnswer: {
    width: 7,
    height: 8,
    bgcolor: "custom.black",
    animation: "blinker 1s linear infinite",
    "@keyframes blinker": {
      "50% ": {
        opacity: 0,
      },
    },
  },
};
