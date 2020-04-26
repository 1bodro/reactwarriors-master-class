import { Messages } from "./Messages";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/dialogs_reduser";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.dialogsPage.messages,
    newMesssageText: state.dialogsPage.newMesssageText,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: newText => {
      dispatch(updateMessageTextCreator(newText));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
