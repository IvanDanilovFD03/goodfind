import {
  IconProps as IconPropsMui,
  SvgIconProps as SvgIconPropsMui,
  SxProps,
} from "@mui/material";

export type SxStyles = Record<string, SxProps>;

export interface IconProps extends IconPropsMui {
  size?: IconSize;
}

export interface SvgIconProps extends SvgIconPropsMui {
  size?: IconSize;
}

export type IconSize = "sm" | "md";
