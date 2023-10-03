import { FC } from "react";

import { Box } from "../ui/Box";
import { Card } from "../ui/Card";
import { CardContent } from "../ui/CardContent";
import { CardMedia } from "../ui/CardMedia";
import { List } from "../ui/List";
import { ListItem } from "../ui/ListItem";
import { MessageCardTitle } from "../MessageCardTitle";
import { Typography } from "../ui/Typography";

import { styles } from "./styles";

export interface MessageCardProps {
  text: string;
  products?:
    | {
        id: string | number;
        title: string;
        image: string | null;
        short_description: string;
        meta: {
          price: string;
          product_url: string;
        };
      }[]
    | "loadingProducts";
}

export const MessageCard: FC<MessageCardProps> = ({ text, products }) => {
  const productList = () => {
    if (products === "loadingProducts") {
      return (
        <Box sx={styles.loadingAnswer}>
          <Box sx={styles.loadingAnswerImageContainer}>
            <Box sx={styles.loadingAnswerImage}></Box>
          </Box>
        </Box>
      );
    }
    return (
      <>
        {products && (
          <Box sx={styles.listContainer}>
            <List sx={styles.list}>
              {products.map(({ id, title, image, short_description, meta }) => (
                <ListItem key={id} sx={styles.listItem}>
                  <Box sx={styles.listItemTitleContainer}>
                    <Box sx={styles.listItemCircle}></Box>
                    <MessageCardTitle
                      text={title}
                      product_url={meta.product_url}
                      price={parseFloat(meta.price).toFixed(2)}
                    />
                  </Box>
                  <Typography variant="textMessage">
                    {short_description}
                  </Typography>
                  {image && (
                    <CardMedia sx={styles.img} src={image} component="img" />
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </>
    );
  };

  return (
    <Card sx={styles.root}>
      <CardContent sx={styles.cardContent}>
        {text === "loadingAnswer" ? (
          <Box sx={styles.loadingAnswer}>
            <Box sx={styles.loadingAnswerTextContainer}>
              <Box sx={styles.loadingAnswerText}>
                <Box sx={styles.loadingAnswerTextItem}></Box>
                <Box sx={styles.loadingAnswerTextItem}></Box>
                <Box sx={styles.loadingAnswerTextItem}></Box>
                <Box sx={styles.loadingAnswerTextItem}></Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Typography variant="textMessage" sx={styles.text}>
            {text}
          </Typography>
        )}
        {productList()}
      </CardContent>
    </Card>
  );
};
