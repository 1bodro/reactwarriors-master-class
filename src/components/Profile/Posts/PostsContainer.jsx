import { Posts } from "./Posts";
import {
  addPostCreator,
  updatePostTextCreator
} from "../../redux/profile_reduser";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    userPhoto: state.user.photo,
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPost: () => {
      dispatch(addPostCreator());
    },

    updatePost: text => {
      dispatch(updatePostTextCreator(text));
    }
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
