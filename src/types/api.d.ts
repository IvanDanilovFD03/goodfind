export type UserMessage = {
  author: "user";
  text: string;
};

export type AIMessage = {
  author: "ai";
  text: string;
  products?: {
    title: { name: string; link: string };
    description: string;
    cost: number;
    linkDetails: string;
    addToCart: string;
    review: {
      grade: number;
      amount: number;
      link: string;
    };
    img: string;
  }[];
};
