import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { MessagesContainer } from "./Messages/MessagesContainer";
import s from "./Dialogs.module.scss";

export const Dialogs = props => {
  const { store } = props;
  const {
    dialogsPage: { dialogs }
  } = store.getState();

  return (
    <div className={s.container}>
      <div className={`${s.listDialogs} customScrollbar`}>
        {dialogs.map(dialog => (
          <Dialog dialog={dialog} />
        ))}
      </div>
      <MessagesContainer store={store} />
    </div>
  );
};
