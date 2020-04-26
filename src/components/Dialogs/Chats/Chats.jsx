import React from "react";
import s from "./Chats.module.scss";
import { Chat } from "./Chat/Chat";

export const Chats = props => {
  const { chats } = props;

  return (
    <div className={`${s.container} customScrollbar`}>
      {chats.map(chat => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  );
};
