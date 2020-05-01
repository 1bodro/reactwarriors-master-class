import { dialogsPage } from "./data";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state = dialogsPage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        idUser: 111,
        idMsg: 14,
        text: state.newMesssageText
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMesssageText: ""
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMesssageText: action.newText };
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

export default dialogsReducer;
