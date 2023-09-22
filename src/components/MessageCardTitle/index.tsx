import { FC } from "react";

import { Link } from "../ui/Link";
import { Typography } from "../ui/Typography";

import { styles } from "./styles";

import TagManager from "react-gtm-module";

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
              TagManager.dataLayer({
                dataLayer: {
                  event: "question_asked",
                },
              })
            }
          >
            <Typography
              variant="textMessage"
              sx={styles.title}
              component="span"
            >
              {text}
            </Typography>
          </Link>
          <Typography variant="textMessage" component="span">
            {" "}
            ${price}
          </Typography>
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
