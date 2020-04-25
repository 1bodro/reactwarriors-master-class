import React from "react";
import { Messages } from "./Messages";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/dialogs_reduser";

export const MessagesContainer = props => {
  const {
    store,
    store: { dispatch }
  } = props; 

  const {
    dialogsPage: { messages, newMesssageText },
    user
  } = store.getState();

  const updateMessage = newText => {
    dispatch(updateMessageTextCreator(newText));
  };
  const sendMessage = () => {
    dispatch(sendMessageCreator());
  };
  return (
    <Messages
      messages={messages}
      newMesssageText={newMesssageText}
      user={user}
      updateMessage={updateMessage}
      sendMessage={sendMessage}
    />
  );
};
