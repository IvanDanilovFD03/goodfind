import { FC } from "react";

import { Link } from "../ui/Link";
import { Typography } from "../ui/Typography";

import { styles } from "./styles";

export interface MessageCardTitleProps {
  text: string;
  price?: string;
  product_url?: string;
}

export const MessageCardTitle: FC<MessageCardTitleProps> = ({
  text,
  price,
  product_url,
}) => {
  return (
    <>
      {product_url ? (
        <Typography>
          <Link
            href={product_url}
            target="_blank"
            onClick={() =>
              window._paq.push(["trackEvent", "Link tapped", "Tapped"])
            }
            color="custom.black"
          >
            <Typography variant="textMessageBold" component="span">
              {text}
            </Typography>
          </Link>
          {price && (
            <Typography variant="textMessage" component="span">
              {" "}
              ${price}
            </Typography>
          )}
        </Typography>
      ) : (
        <Typography variant="textMessage" sx={styles.title}>
          {text}
          {price && (
            <Typography variant="textMessage" component="span">
              {" "}
              ${price}
            </Typography>
          )}
        </Typography>
      )}
    </>
  );
};
