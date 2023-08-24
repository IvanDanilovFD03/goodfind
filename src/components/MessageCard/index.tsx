import { FC, useState } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Box } from "../ui/Box";
import { Card } from "../ui/Card";
import { CardActions } from "../ui/CardActions";
import { CardContent } from "../ui/CardContent";
import { CardMedia } from "../ui/CardMedia";
import { List } from "../ui/List";
import { ListItem } from "../ui/ListItem";

import { styles } from "./styles";
import { Typography } from "../ui/Typography";

export interface MessageCardProps {
  text: string;
  products?: {
    id: string | number;
    title: string;
    image: string | null;
    short_description: string;
  }[];
}

export const MessageCard: FC<MessageCardProps> = ({ text, products }) => {
  return (
    <Card sx={styles.root}>
      <CardContent sx={styles.cardContent}>
        <Typography variant="textMessage">{text}</Typography>
        {products && (
          <Box sx={styles.listContainer}>
            <Typography variant="textMessage">
              So here is the recommended shopping list for you:
            </Typography>
            <List sx={styles.list} style={{ listStyleType: "disc" }}>
              {products.map(({ id, title, image, short_description }) => (
                <ListItem key={id} sx={styles.listItem}>
                  <Box  sx={styles.listItemTitleContainer}>
                    <Box sx={styles.listItemCircle}></Box>
                    <Typography variant="textMessage" sx={styles.listItemTitle}>
                      {title}
                    </Typography>
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
      </CardContent>
    </Card>
  );
};
