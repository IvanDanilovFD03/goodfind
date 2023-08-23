import { FC } from "react";

import { MainPageView } from "../MainPageView/MainPageView";
import { UserMessage } from "../../types/api";
import { AIMessage } from "../../types/api";

const DUMMY_DATA: Array<UserMessage | AIMessage> = [
  {
    author: "user",
    text: "I have just started my journey to growing. What should I take? I have just started my journey to growing. What should I take? I have just started my journey to growing. What should I take? I have just started my journey to growing. What should I take? I have just started my journey to growing. What should I take? I have just started my journey to growing. What should I take?",
  },
];

const MainPage: FC = () => {
  return <MainPageView messages={DUMMY_DATA} />;
};

export default MainPage;
