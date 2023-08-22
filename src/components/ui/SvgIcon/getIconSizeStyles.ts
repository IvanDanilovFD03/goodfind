import { styles } from "./styles";

import { IconSize } from "../../../types/styles";

export const getIconSizeStyles = (size: IconSize) => {
  switch (size) {
    case "sm": {
      return styles.small;
    }
    default: {
      return styles.medium;
    }
  }
};
