import React from "react";
import { ChatsContainer } from "./Chats/ChatsContainer";
import { MessagesContainer } from "./Messages/MessagesContainer";
import s from "./Dialogs.module.scss";
import {AuthRedirectComponent} from "../../hoc/withAuthRedirect";

const Dialogs = () => {
  // const { store } = props;
  // const {
  //   dialogsPage: { dialogs }
  // } = store.getState();


  return (
    <div className={s.container}>
      <ChatsContainer />
      <MessagesContainer />
    </div>
  );
};

export default AuthRedirectComponent(Dialogs);
