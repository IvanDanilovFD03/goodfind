import { FC, useCallback, useEffect, useState } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { Message } from "../../types/api";

const DUMMY_DATA: {
  success: boolean;
  data: {
    messages: {
      pagination: {
        total: number;
        per_page: number;
        current_page: number;
        last_page: number;
      };
      items: Message[];
    };
  };
} = {
  success: true,
  data: {
    messages: {
      pagination: {
        total: 4,
        per_page: 100,
        current_page: 1,
        last_page: 1,
      },
      items: [
        {
          role: 2,
          content:
            "Based on your search query for something special for your friend, I have found three products that I believe would make great choices:\n\n1. Snuffles Teddy Bear: This jumbo Snuffles teddy bear has been spreading joy for over 30 years and is one of our most beloved teddy bears. With its super-soft taupe plush, it feels like snuggling a cloud! This teddy bear would be a special and huggable gift for your friend, perfect for birthdays, baby showers, or any occasion that calls for a lifetime of hugs.\n\n2. Luke & Lucy Twin Doll Set: This set of twin dolls, Luke and Lucy, will bring double the fun to your friend. They are 15 inches tall and come with adorable coordinating removable rompers and caps. With their eyes that open and close, and the ability to suck their thumbs or the included pacifiers, these dolls are perfect for nurturing and cuddling. This set would make a special gift for your friend to enjoy hours of play and develop social and emotional skills.\n\n3. Djeco Lovely Paper Correspondence Set: This Beautiful Djeco Lovely Paper Correspondence Set, featuring Anna Emilia writing set, is a wonderful choice for your friend if they cherish the art of letter writing. The set includes 10 cards and 10 envelopes with stunning floral illustrations and metallic effects. It would be a thoughtful gift for your friend to bring back the joy of sending handwritten notes. Additionally, Djeco is known for their high-quality and intricately designed products, making this set special and unique.\n\nI hope these suggestions align with what you were looking for. If you have any more specific preferences or need further assistance, feel free to let me know!",
          products: [
            {
              id: 306,
              title: "Notecards Anna",
              image: null,
              short_description:
                "Notecards Anna Kids and adults will both love this beautiful Djeco Lovely Paper Correspondence Set...",
            },
            {
              id: 417,
              title: "Diaper Bag with Accessories",
              image: null,
              short_description:
                "Diaper Bag with Accessories Snuffles has been spreading joy as one of our most beloved teddy bears f...",
            },
            {
              id: 547,
              title: "Luke & Lucy",
              image: null,
              short_description:
                "Luke & Lucy YOURS TO LOVE: It's twice the fun with twin 15-inch dolls Luke and Lucy HUGS ALL DAY: Lu...",
            },
          ],
        },
        {
          role: 1,
          content: "I want something special for my friend",
        },
        {
          role: 2,
          content:
            "Based on your search query, I have found three products that match your criteria:\n\n1. HiHo Cherry-O - This is a family favorite game that is not only fun but also helps preschoolers develop math skills such as counting, addition, and subtraction. It involves picking pretend cherries, blueberries, and apples from a tree and filling your basket. It is a great choice if you're looking for a game that combines learning and entertainment.\n\n2. Mediterranean Tthermos 350ML - This thermos is designed with a pleasant soft, rubbery feel and is highly effective at maintaining the temperature of liquids for more than 24 hours. It is made from high-quality materials and features an easy pouring system. If you are in need of a durable and efficient thermos for your liquids, this would be a great choice.\n\n3. Mini bricks Construction Set Western Wall, 630 pcs - This construction set allows you to build a realistic model using ceramic building bricks and glue. It encourages creativity and is a great educational toy for teaching children about engineering and design. This set is suitable for both children and adults, making it a versatile option.\n\nI hope this helps you in making your decision. If you have any further questions or need assistance with anything else, feel free to ask!",
          products: [
            {
              id: 344,
              title: "HiHo Cherry-O",
              image: "https://i.imgur.com/KgsPahz.png",
              short_description:
                "HiHo Cherry-O Product Description Check out this new version of the family favorite HiHo Cherry-O ga...",
            },
            {
              id: 434,
              title: "Mediterranean Tthermos 350ML",
              image: "https://i.imgur.com/KgsPahz.png",
              short_description:
                "Mediterranean Tthermos 350ML Themed thermos for liquids, 350 ml With a pleasant soft, rubbery feel,...",
            },
            {
              id: 499,
              title: "Mini bricks Construction Set Western Wall, 630 pcs",
              image: "https://i.imgur.com/KgsPahz.png",
              short_description:
                "Mini bricks Construction Set Western Wall, 630 pcs Build the real model with our ceramic building br...",
            },
          ],
        },
        {
          role: 1,
          content: "Hm... Give me the best choice",
        },
      ],
    },
  },
};

const MainPage: FC = () => {
  const { data } = DUMMY_DATA;
  const { messages } = data;
  const { items } = messages;
  const [enteredTextMessage, setEnteredTextMessage] = useState("");
  const [activeSendRequest, setActiveSendRequest] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);

  // http://localhost:3000/?authorization_token=3|1HyGQZJmgrIsrMwnYXcQvNJWycjbvn74vgwLFRuw&website_id=9
  const windowLink = new URL(window.location.href);
  const authorizationToken = windowLink.searchParams.get("authorization_token");
  const websiteId = windowLink.searchParams.get("website_id");

  const sendRequest = useCallback(async () => {
    // setIsLoading(true);
    if (enteredTextMessage !== "") {
      try {
        const response = await fetch(
          `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authorizationToken}`,
            },
            body: JSON.stringify({
              session_token: "fghfghfhgfghfgh",
              content: enteredTextMessage,
            }),
          }
        );
        setActiveSendRequest(false);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [enteredTextMessage, authorizationToken, websiteId]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const getHistory = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await fetch(
        `https://goodfind-ai.empat.tech/api/websites/${websiteId}/search/history?session_token=gdfgdfgdg`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);
      setMessageHistory(responseData.data.messages.items);
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken, websiteId]);

  // for GET request for history
  useEffect(() => {
    console.log("load");
    getHistory();
  }, [getHistory]);

  return (
    <MainPageView
      messages={messageHistory}
      setEnteredTextMessage={setEnteredTextMessage}
      activeSendRequest={activeSendRequest}
      setActiveSendRequest={setActiveSendRequest}
    />
  );
};

export default MainPage;
