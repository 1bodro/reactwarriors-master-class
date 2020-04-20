import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import s from "./Dialogs.module.scss";

export const Dialogs = props => {
  const { dialogs: dialogsData, messages: messagesData } = props;

  return (
    <div className={s.container}>
      <div className={s.listDialogs}>
        {dialogsData.map(dialog => (
          <Dialog id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.listMessages}>
        {messagesData.map(message => (
          <Message message={message.text} />
        ))}
      </div>
    </div>
  );
};
