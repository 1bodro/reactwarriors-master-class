import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import s from "./Dialogs.module.scss";

export const Dialogs = props => {
  const { dialogs: dialogsData, messages: messagesData, user } = props;

  return (
    <div className={s.container}>
      <div className={`${s.listDialogs} customScrollbar`}>
        {dialogsData.map(dialogData => (
          <Dialog dialogData={dialogData} />
        ))}
      </div>
      <div className={`${s.listMessages} customScrollbar`}>
        {messagesData.map(message => (
          <Message message={message} user={user} />
        ))}
      </div>
    </div>
  );
};
