import s from "./Messages.module.scss";
import React from "react";

const addMessageForm = () => {
   return( <div className={s.writeMessages} ref={testRef}>
        <form>
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
        </form>
    </div>)
}