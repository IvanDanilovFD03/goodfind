export type Message = {
  role: number;
  content: string;
  products?: {
    id: number;
    title: string;
    image: string | null;
    short_description: string;
    meta: {
      price: string;
      product_url: string;
    }
  }[];
};
