import { Messages } from "./Messages";
import {sendMessageCreator} from "../../redux/dialogs_reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.dialogsPage.messages,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageText => {
      dispatch(sendMessageCreator(newMessageText));
    }
  }
};

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
