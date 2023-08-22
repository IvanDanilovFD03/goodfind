export {};

declare module "@mui/material/styles" {
  // Update types for breakpoints
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  // Update types for the palette
  interface CustomPaletteColorOptions {
    white?: string;
    black?: string;
    gray?: string;
    grayLight?: string;
    green?: string;
    greenLight?: string;
    orange?: string;
  }
  interface CustomPaletteColor {
    white: string;
    black: string;
    gray: string;
    grayLight: string;
    green: string;
    greenLight: string;
    orange: string;
  }
  interface PaletteOptions {
    custom: CustomPaletteColorOptions;
  }
  interface Palette {
    customPalette: CustomPaletteColor;
  }

  // Update typography types
  interface TypographyVariants {
    textInfo: React.CSSProperties;
    textSmall: React.CSSProperties;
    textMessage: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    textInfo?: React.CSSProperties;
    textSmall?: React.CSSProperties;
    textMessage?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textInfo: true;
    textSmall: true;
    textMessage: true;
  }
}
