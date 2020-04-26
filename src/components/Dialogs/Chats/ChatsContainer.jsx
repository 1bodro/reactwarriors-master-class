import React from "react";
import { Chats } from "./Chats";
import StoreContext from "../../../StoreContext";

export const ChatsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const {
          dialogsPage: { chats }
        } = store.getState();

        return <Chats chats={chats} />;
      }}
    </StoreContext.Consumer>
  );
};
