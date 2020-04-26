import React from "react";
import { Messages } from "./Messages";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/dialogs_reduser";
import StoreContext from "../../../StoreContext";

export const MessagesContainer = () => {
  // const {
  //   store,
  //   store: { dispatch }
  // } = props;

  // const {
  //   dialogsPage: { messages, newMesssageText },
  //   user
  // } = store.getState();

  // const updateMessage = newText => {
  //   dispatch(updateMessageTextCreator(newText));
  // };
  // const sendMessage = () => {
  //   dispatch(sendMessageCreator());
  // };
  return (
    <StoreContext.Consumer>
      {store => {
        const {
          dialogsPage: { messages, newMesssageText },
          user
        } = store.getState();
        const updateMessage = newText => {
          store.dispatch(updateMessageTextCreator(newText));
        };
        const sendMessage = () => {
          store.dispatch(sendMessageCreator());
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
      }}
    </StoreContext.Consumer>
  );
};
