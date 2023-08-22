import useMediaQuery from "@mui/material/useMediaQuery";

import { basicTheme } from "../theme";

export const useBreakpoints = () => {
  const isUpMobile = useMediaQuery(basicTheme.breakpoints.up("mobile"));
  const isUpTablet = useMediaQuery(basicTheme.breakpoints.up("tablet"));
  const isUpLaptop = useMediaQuery(basicTheme.breakpoints.up("laptop"));
  const isUpDesktop = useMediaQuery(basicTheme.breakpoints.up("desktop"));

  return {
    isUpMobile,
    isUpTablet,
    isUpLaptop,
    isUpDesktop,
  };
};
