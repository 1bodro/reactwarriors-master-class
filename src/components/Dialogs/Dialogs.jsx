import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Messages } from "./Messages/Messages";
import s from "./Dialogs.module.scss";

export const Dialogs = props => {
  const { dialogs: dialogsData, messages, user } = props;

  return (
    <div className={s.container}>
      <div className={`${s.listDialogs} customScrollbar`}>
        {dialogsData.map(dialogData => (
          <Dialog dialogData={dialogData} />
        ))}
      </div>
      <Messages messages={messages} user={user} />
    </div>
  );
};
