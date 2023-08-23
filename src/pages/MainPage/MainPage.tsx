import { FC } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { UserMessage } from "../../types/api";
import { AIMessage } from "../../types/api";

const DUMMY_DATA: Array<UserMessage | AIMessage> = [
  {
    author: "user",
    text: "I have just started my journey to growing. What should I take?",
  },
  {
    author: "ai",
    text: "Certainly! Here are a few Grown sets that are suitable for beginners.",
    products: [
      {
        title: { name: "Lavender Feminized Cannabis Seeds", link: "/" },
        description: "A great rainy day smoke",
        cost: 9.58,
        linkDetails: "/",
        addToCart: "/",
        review: {
          grade: 5,
          amount: 7,
          link: "/",
        },
        img: "../../components/app/productImages/product1.png",
      },
      {
        title: { name: "Lemon Autoflower Cannabis Seeds", link: "/" },
        description: "Lemon Skunk dragged into the supersonic age",
        cost: 9.25,
        linkDetails: "/",
        addToCart: "/",
        review: {
          grade: 5,
          amount: 17,
          link: "/",
        },
        img: "../../components/app/productImages/product2.png",
      },
      {
        title: { name: "Blueberry Gusto Auto Cannabis Seeds", link: "/" },
        description: "Fast, exploisive fruit",
        cost: 9.58,
        linkDetails: "/",
        addToCart: "/",
        review: {
          grade: 5,
          amount: 7,
          link: "/",
        },
        img: "../../components/app/productImages/product3.png",
      },
    ],
  },
];

const MainPage: FC = () => {
  return <MainPageView messages={DUMMY_DATA} />;
};

export default MainPage;
