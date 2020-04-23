import React from "react";
import s from "./Messages.module.scss";
import { Message } from "./Message/Message";

export const Messages = props => {
  const { messages: messagesData, user } = props;

  return (
    <div className={s.container}>
      <div className={`${s.listMessages} customScrollbar`}>
        {messagesData.map(message => (
          <Message message={message} user={user} />
        ))}
      </div>
      <div className={s.writeMessages}>
        <textarea
        // ref={textareaRef}
        // value={newPostText}
        // className="textarea"
        // onChange={updatePost}
        />
        <button
          className={s.btnSend}
          // onClick={sendPost}
        >
          send
        </button>
      </div>
    </div>
  );
};
