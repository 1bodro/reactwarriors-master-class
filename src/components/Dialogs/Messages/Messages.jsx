import React from "react";
import s from "./Messages.module.scss";
import { Message } from "./Message/Message";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/dialogs_reduser";

export const Messages = props => {
  const { messages: messagesData, newMesssageText, user, dispatch } = props;
  let textareaRef = React.createRef();
  let testRef = React.createRef();

  const updateMessage = e => {
    dispatch(updateMessageTextCreator(e.target.value));
  };
  const sendMessage = () => {
    dispatch(sendMessageCreator());
  };
  return (
    <div className={s.container}>
      <div className={`${s.listMessages} customScrollbar`}>
        {messagesData.map(message => (
          <Message message={message} user={user} />
        ))}
      </div>
      <div className={s.writeMessages} ref={testRef}>
        <textarea
          ref={textareaRef}
          value={newMesssageText}
          className="textarea"
          onChange={updateMessage}
          placeholder="Enter your message"
        />
        <button className={s.btnSend} onClick={sendMessage}>
          send
        </button>
      </div>
    </div>
  );
};
