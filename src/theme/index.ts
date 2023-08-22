import { createTheme } from "@mui/material";

const DrukWideBoldFontFamily = "'DrukWideBold', Arial, serif";
const InterFontFamily = "'Inter', Arial, serif";
const PoppinsFontFamily = "'Poppins', Arial, serif";

export const basicTheme = createTheme({
  palette: {
    background: {
      default: "transparent",
    },
    custom: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "#797979",
      grayLight: "#797979",
      green: "#5AC482",
      greenLight: "#5BC782",
      orange: "#FFB800",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1290,
      desktop: 1440,
    },
  },
  typography: {
    fontFamily: [
      DrukWideBoldFontFamily,
      InterFontFamily,
      PoppinsFontFamily,
    ].join(","),
    h1: {
      fontFamily: DrukWideBoldFontFamily,
      fontWeight: 700,
      fontSize: "12px",
    },
    h2: {
      fontFamily: DrukWideBoldFontFamily,
      fontWeight: 700,
      fontSize: "10px",
    },
    h3: {
      fontFamily: InterFontFamily,
      fontWeight: 400,
      fontSize: "12px",
    },
    textMessage: {
      fontFamily: InterFontFamily,
      fontWeight: 400,
      fontSize: "12px",
    },
    textInfo: {
      fontFamily: PoppinsFontFamily,
      fontWeight: 400,
      fontSize: "12px",
    },
    textSmall: {
      fontFamily: InterFontFamily,
      fontWeight: 400,
      fontSize: "10px",
    },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "textMessage",
          color: "#000000",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h2",
            subtitle2: "h2",
            textInfo: "p",
            textSmall: "p",
            textMessage: "p",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "laptop",
        },
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: 0,
            textTransform: "none",
            color: "inherit",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              textDecoration: "underline",
              textUnderlinePosition: "under",
              color: "inherit",
            },
            "&:disabled": {
              color: "grayLight",
            },
          },
        },
      },
    },
  },
  basicTheme
);
