import { SxStyles } from "../../types/styles";

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
  text: {
    whiteSpace: "pre-line",
  },
  listContainer: {
    mt: 1,
  },
  list: {
    mt: 1,
    p: 0,
    display: "flex",
    flexDirection: "column",
    rowGap: 3,
  },
  listItem: {
    p: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    rowGap: 1,
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
    width: "100%",
    height: "100%",
  },
  loadingAnswerTextContainer: {
    backgroundColor: "custom.white",
    width: "100%",
  },
  loadingAnswerText: {
    animationDuration: "2.5s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: "placeHolderShimmer",
    animationTimingFunction: "linear",
    backgroundColor: "#dedede",
    background:
      "linear-gradient(to right, #dedede 3%, #e4e4e4 8%, #dedede 15%)",
    backgroundSize: "800px 1px",
    height: "124px",
    position: "relative",
    width: "100%",
    "@keyframes placeHolderShimmer": {
      "0%": {
        backgroundPosition: "100% 0",
      },
      "100%": {
        backgroundPosition: "-100% 0",
      },
    },
  },
  loadingAnswerTextItem: {
    backgroundColor: "custom.white",
    position: "absolute",
    height: 8,
    width: "100%",
    left: 0,
    "&:nth-of-type(1)": {
      top: 18.4,
    },
    "&:nth-of-type(2)": {
      top: 44.8,
    },
    "&:nth-of-type(3)": {
      top: 71.2,
    },
    "&:nth-of-type(4)": {
      top: 97.6,
    },
  },
  loadingAnswerImageContainer: {
    my: 4,
    backgroundColor: "custom.white",
    width: 100,
  },
  loadingAnswerImage: {
    animationDuration: "2.5s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: "placeHolderShimmer",
    animationTimingFunction: "linear",
    backgroundColor: "#dedede",
    background:
      "linear-gradient(to right, #dedede 3%, #e4e4e4 8%, #dedede 15%)",
    backgroundSize: "800px 1px",
    height: "100px",
    borderRadius: 4,
  },
};
