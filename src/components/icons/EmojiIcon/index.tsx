import { FC } from "react";

import { SvgIconProps } from "../../../types/styles";
import { SvgIcon } from "../../ui/SvgIcon";

export const EmojiIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} width="25" height="24" viewBox="0 0 25 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9336 2.75C7.82496 2.75 3.68359 6.89137 3.68359 12C3.68359 17.1086 7.82496 21.25 12.9336 21.25C18.0422 21.25 22.1836 17.1086 22.1836 12C22.1836 6.89137 18.0422 2.75 12.9336 2.75ZM2.18359 12C2.18359 6.06294 6.99653 1.25 12.9336 1.25C18.8707 1.25 23.6836 6.06294 23.6836 12C23.6836 17.9371 18.8707 22.75 12.9336 22.75C6.99653 22.75 2.18359 17.9371 2.18359 12ZM9.33107 15.5534C9.57773 15.2206 10.0474 15.1508 10.3802 15.3975C11.1085 15.9373 11.9877 16.25 12.9336 16.25C13.8795 16.25 14.7586 15.9373 15.487 15.3975C15.8197 15.1508 16.2895 15.2206 16.5361 15.5534C16.7828 15.8862 16.713 16.3559 16.3802 16.6025C15.4078 17.3233 14.2186 17.75 12.9336 17.75C11.6486 17.75 10.4594 17.3233 9.48698 16.6025C9.15422 16.3559 9.08441 15.8862 9.33107 15.5534Z"
      fill="#DADADA"
    />
    <path
      d="M16.9336 10.5C16.9336 11.3284 16.4859 12 15.9336 12C15.3813 12 14.9336 11.3284 14.9336 10.5C14.9336 9.67157 15.3813 9 15.9336 9C16.4859 9 16.9336 9.67157 16.9336 10.5Z"
      fill="#DADADA"
    />
    <path
      d="M10.9336 10.5C10.9336 11.3284 10.4859 12 9.93359 12C9.38131 12 8.93359 11.3284 8.93359 10.5C8.93359 9.67157 9.38131 9 9.93359 9C10.4859 9 10.9336 9.67157 10.9336 10.5Z"
      fill="#DADADA"
    />
  </SvgIcon>
);