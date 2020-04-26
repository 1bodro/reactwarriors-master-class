import { dialogsPage } from "./data";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReduser = (state = dialogsPage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        idUser: 1,
        idMsg: 14,
        text: state.newMesssageText
      };
      let stateCopy = { ...state };

      stateCopy.newMesssageText = { ...state.newMesssageText };
      stateCopy.messages = [...state.messages];
      stateCopy.newMesssageText = "";
      stateCopy.messages.push(newMessage);

      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMesssageText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateMessageTextCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReduser;
