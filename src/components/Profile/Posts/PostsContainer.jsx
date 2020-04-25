import React from "react";
import { Posts } from "./Posts";
import {
  addPostCreator,
  updatePostTextCreator
} from "../../redux/profile_reduser";

export const PostsContainer = props => {
  const {
    store,
    store: { dispatch }
  } = props;
  const {
    profilePage: data,
    user: { photo }
  } = store.getState();
  const sendPost = () => {
    dispatch(addPostCreator());
  };

  const updatePost = text => {
    dispatch(updatePostTextCreator(text));
  };

  return (
    <Posts
      data={data}
      userPhoto={photo}
      updatePost={updatePost}
      sendPost={sendPost}
    />
  );
};
