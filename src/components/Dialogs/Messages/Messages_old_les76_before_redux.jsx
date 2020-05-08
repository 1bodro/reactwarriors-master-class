import React from "react";
import s from "./Messages.module.scss";
import { Message } from "./Message/Message";

export const Messages = props => {
    const { messages, newMesssageText, user, updateMessage, sendMessage } = props;
    let textareaRef = React.createRef();
    let testRef = React.createRef();

    const onUpdateMessage = e => {
        updateMessage(e.target.value);
    };
    const onSendMessage = () => {
        sendMessage();
    };
    return (
        <div className={s.container}>
            <div className={`${s.listMessages} customScrollbar`}>
                {messages.map(message => (
                    <Message key={message.idMsg} message={message} user={user} />
                ))}
            </div>
            <div className={s.writeMessages} ref={testRef}>
        <textarea
            ref={textareaRef}
            value={newMesssageText}
            className="textarea"
            onChange={onUpdateMessage}
            placeholder="Enter your message"
        />
                <button className={s.btnSend} onClick={onSendMessage}>
                    send
                </button>
            </div>
        </div>
    );
};