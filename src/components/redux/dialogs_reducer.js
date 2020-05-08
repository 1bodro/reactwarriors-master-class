import { dialogsPage } from "./data";

const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state = dialogsPage, action) => {
  switch (action.type) {

    case SEND_MESSAGE: {
      let newMessage = {
        idUser: 111,
        idMsg: 14,
        text: action.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    }

    default:
      return state;
  }
};

export const sendMessageCreator = newMessageText => ({ type: SEND_MESSAGE, newMessageText: newMessageText });

export default dialogsReducer;
