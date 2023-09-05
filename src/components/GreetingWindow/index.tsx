import { FC, useRef, useEffect } from "react";

import { Avatar } from "../ui/Avatar";
import { Box } from "../ui/Box";
import { IconButton } from "../ui/IconButton";
import { Typography } from "../ui/Typography";

import { CloseIcon } from "../icons/CloseIcon";
import { MessageIcon } from "../icons/MessageIcon";

import { styles } from "./styles";

import Typed from "typed.js";

export interface GreetingWindowProps {
  greeting: string;
  setGreetingWindow: (value: React.SetStateAction<boolean>) => void;
}

export const GreetingWindow: FC<GreetingWindowProps> = ({
  greeting,
  setGreetingWindow,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${greeting}`],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, [greeting]);

  return (
    <Box sx={styles.root}>
      <Avatar alt="ai image" variant="square" sx={styles.icon}>
        <MessageIcon size="md" />
      </Avatar>
      <Box sx={styles.text}>
        <Typography
          color="custom.white"
          variant="textMessage"
          sx={styles.textMessage}
          ref={el}
        ></Typography>
      </Box>
      <IconButton
        sx={styles.closeButton}
        onClick={() => setGreetingWindow(false)}
      >
        <CloseIcon sx={styles.closeIcon} />
      </IconButton>
    </Box>
  );
};
