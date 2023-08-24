export type Message = {
  role: number;
  content: string;
  products?: {
    id: number;
    title: string;
    image: string | null;
    short_description: string;
  }[];
};
