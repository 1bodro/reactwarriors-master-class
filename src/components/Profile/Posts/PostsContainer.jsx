import { Posts } from "./Posts";
import {addPostCreator} from "../../redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    userPhoto: state.profilePage.authUser.photos.large,
    posts: state.profilePage.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPost: newPostText => {
      dispatch(addPostCreator(newPostText));
    }
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
