import { FC, useCallback, useEffect, useState } from "react";

import { Box } from "../ui/Box";
import { Button } from "../ui/Button";
import { GreetingWindow } from "../GreetingWindow";
import { IconButton } from "../ui/IconButton";
import { Input } from "../ui/Input";
import { Typography } from "../ui/Typography";

import { SendIcon } from "../icons/SendIcon";
import { EmojiIcon } from "../icons/EmojiIcon";
import { MessageIcon } from "../icons/MessageIcon";

import { SxProps } from "@mui/material";
import { styles } from "./styles";

import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";

import TagManager from "react-gtm-module";

export interface RequestPanelProps {
  setEnteredTextMessage: (value: React.SetStateAction<string>) => void;
  activeSendRequest: boolean;
  setActiveSendRequest: (value: React.SetStateAction<boolean>) => void;
  messageWidgetOpen: boolean;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
  greeting: string;
}

export const RequestPanel: FC<RequestPanelProps> = ({
  setEnteredTextMessage,
  activeSendRequest,
  setActiveSendRequest,
  messageWidgetOpen,
  setMessageWidgetOpen,
  greeting,
}) => {
  const [emojiPickerActive, setEmojiPickerActive] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [greetingWindow, setGreetingWindow] = useState(false);
  const [counter, setCounter] = useState(30);

  const emojiPickHandler = useCallback(
    (emojiData: EmojiClickData) => {
      setTextMessage(textMessage + emojiData.emoji);
    },
    [textMessage]
  );

  useEffect(() => {
    if (!messageWidgetOpen && counter !== 0) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (messageWidgetOpen) {
      setGreetingWindow(false);
      setCounter(30);
    }
    if (counter === 0) {
      setGreetingWindow(true);
    }
  }, [messageWidgetOpen, counter]);

  const textEnterHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setGreetingWindow(false);
      setMessageWidgetOpen(true);
      setEnteredTextMessage(textMessage);
      setActiveSendRequest(true);
      setTextMessage("");
      TagManager.dataLayer({
        dataLayer: {
          event: "question_asked",
        },
      });
    }
  };

  const activeButtonStyles = (activeSendRequest: boolean): SxProps =>
    !activeSendRequest
      ? styles.sendButton
      : ({ ...styles.sendButton, ...styles.disabledSendButton } as SxProps);

  useEffect(() => {
    if (textMessage === "") {
      setEnteredTextMessage(textMessage);
    }
  }, [setEnteredTextMessage, textMessage]);

  return (
    <Box>
      {messageWidgetOpen || greetingWindow ? (
        <Box sx={styles.root}>
          {greetingWindow && (
            <Box sx={styles.greetingMessage}>
              <GreetingWindow
                greeting={greeting}
                setGreetingWindow={setGreetingWindow}
              />
            </Box>
          )}
          <Box sx={styles.input}>
            <Input
              sx={styles.inputBase}
              placeholder="Write a reply..."
              onChange={(event) => setTextMessage(event.target.value)}
              value={textMessage}
              onKeyDown={(event) => textEnterHandler(event)}
              disabled={activeSendRequest}
            />
            <IconButton
              sx={styles.emojiButton}
              onClick={() => setEmojiPickerActive(!emojiPickerActive)}
            >
              <EmojiIcon size="md" />
            </IconButton>
            {emojiPickerActive && (
              <Box sx={styles.emojiPicker}>
                <EmojiPicker
                  width={300}
                  height={350}
                  onEmojiClick={(emojiData: EmojiClickData) =>
                    emojiPickHandler(emojiData)
                  }
                />
              </Box>
            )}
          </Box>
          <IconButton
            sx={activeButtonStyles(activeSendRequest)}
            onClick={() => {
              setGreetingWindow(false);
              setMessageWidgetOpen(true);
              setEnteredTextMessage(textMessage);
              setActiveSendRequest(true);
              setTextMessage("");
              TagManager.dataLayer({
                dataLayer: {
                  event: "question_asked",
                },
              });
            }}
            disabled={activeSendRequest}
          >
            <SendIcon size="md" sx={styles.sendButtonIcon} />
          </IconButton>
        </Box>
      ) : (
        <Button
          sx={styles.rootClose}
          onClick={() => setMessageWidgetOpen(true)}
        >
          <MessageIcon size="lg" sx={styles.logoIcon} />
          <Box sx={styles.logoText}>
            <Typography variant="h2" color="custom.white">
              ASSISTANT
            </Typography>
            <Typography variant="h2" color="custom.green">
              GURU
            </Typography>
          </Box>
        </Button>
      )}
    </Box>
  );
};
