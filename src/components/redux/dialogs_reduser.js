const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        idUser: 1,
        idMsg: 14,
        text: state.newMesssageText
      };
      state.newMesssageText = "";
      state.messages.push(newMessage);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMesssageText = action.newText;
      return state;

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
