import { FC, useRef, useEffect } from "react";

import { Avatar } from "../ui/Avatar";
import { Box } from "../ui/Box";
import { Typography } from "../ui/Typography";

import { MessageIcon } from "../icons/MessageIcon";

import { styles } from "./styles";

import Typed from "typed.js";

export interface GreetingWindowProps {
  greeting: string;
}

export const GreetingWindow: FC<GreetingWindowProps> = ({ greeting }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${greeting}`],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
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
    </Box>
  );
};
