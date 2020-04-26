import { Chats } from "./Chats";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    chats: state.dialogsPage.chats
  };
};

export const ChatsContainer = connect(mapStateToProps)(Chats);
