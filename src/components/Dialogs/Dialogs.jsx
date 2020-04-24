import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Messages } from "./Messages/Messages";
import s from "./Dialogs.module.scss";

export const Dialogs = props => {
  const {
    dialogsPage: { dialogs, messages, newMesssageText },
    user,
    dispatch
  } = props;

  return (
    <div className={s.container}>
      <div className={`${s.listDialogs} customScrollbar`}>
        {dialogs.map(dialogData => (
          <Dialog dialogData={dialogData} />
        ))}
      </div>
      <Messages
        newMesssageText={newMesssageText}
        dispatch={dispatch}
        messages={messages}
        user={user}
      />
    </div>
  );
};
