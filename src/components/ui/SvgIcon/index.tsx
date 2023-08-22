import { FC } from "react";
import { SvgIcon as SvgIconMui, SxProps } from "@mui/material";

import { SvgIconProps } from "../../../types/styles";

import { getIconSizeStyles } from "./getIconSizeStyles";

export const SvgIcon: FC<SvgIconProps> = ({ size = "sm", sx, ...rest }) => {
  const iconStyles =
    sx === undefined
      ? getIconSizeStyles(size)
      : ({ ...sx, ...getIconSizeStyles(size) } as SxProps);

  return <SvgIconMui {...rest} sx={iconStyles} />;
};
