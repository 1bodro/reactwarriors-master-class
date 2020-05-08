import React from "react";
import s from "./Messages.module.scss";
import { Message } from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

export const Messages = props => {
  const { messages, user, sendMessage } = props;
  // let textareaRef = React.createRef();
  // let testRef = React.createRef();

  // const onUpdateMessage = e => {
  //   updateMessage(e.target.value);
  // };

  const onSendMessage = values => {
    sendMessage(values.newMessageText);
  };

  return (
    <div className={s.container}>
      <div className={`${s.listMessages} customScrollbar`}>
        {messages.map(message => (
          <Message key={message.idMsg} message={message} user={user} />
        ))}
      </div>
      <AddMessageFormRedux onSubmit={onSendMessage} />
    </div>
  );
};

const AddMessageForm = props => {
  return (
      <form className={s.writeMessages} onSubmit={props.handleSubmit}>
          <Field
              component={TextArea}
              name="newMessageText"
              className="textarea"
              placeholder="Enter your message"
              validate={[required, maxLength50]}
          />
          <button className={s.btnSend}>
              send
          </button>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);