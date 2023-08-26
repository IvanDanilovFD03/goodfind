import { FC, useCallback, useEffect, useState } from "react";
import { Box } from "../ui/Box";
import { Input } from "../ui/Input";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";

import { IconButton } from "../ui/IconButton";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { SxProps } from "@mui/material";

import { styles } from "./styles";
import { SendIcon } from "../icons/SendIcon";
import { EmojiIcon } from "../icons/EmojiIcon";
import { MessageIcon } from "../icons/MessageIcon";

export interface RequestPanelProps {
  setEnteredTextMessage: (value: React.SetStateAction<string>) => void;
  activeSendRequest: boolean;
  setActiveSendRequest: (value: React.SetStateAction<boolean>) => void;
  messageWidgetOpen: boolean;
  setMessageWidgetOpen: (value: React.SetStateAction<boolean>) => void;
}

export const RequestPanel: FC<RequestPanelProps> = ({
  setEnteredTextMessage,
  activeSendRequest,
  setActiveSendRequest,
  messageWidgetOpen,
  setMessageWidgetOpen,
}) => {
  const [emojiPickerActive, setEmojiPickerActive] = useState(false);
  const [textMessage, setTextMessage] = useState("");

  const emojiPickHandler = useCallback(
    (emojiData: EmojiClickData) => {
      setTextMessage(textMessage + emojiData.emoji);
    },
    [textMessage]
  );

  const textEnterHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setEnteredTextMessage(textMessage);
      setActiveSendRequest(true);
      setTextMessage("");
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
      {messageWidgetOpen ? (
        <Box sx={styles.root}>
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
              setEnteredTextMessage(textMessage);
              setActiveSendRequest(true);
              setTextMessage("");
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
