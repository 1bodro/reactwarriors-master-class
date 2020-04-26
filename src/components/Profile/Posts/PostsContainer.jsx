import React from "react";
import { Posts } from "./Posts";
import {
  addPostCreator,
  updatePostTextCreator
} from "../../redux/profile_reduser";
import StoreContext from "../../../StoreContext";

export const PostsContainer = () => {
  // const {
  //   store,
  //   store: { dispatch }
  // } = props;
  // const {
  //   profilePage: data,
  //   user: { photo }
  // } = store.getState();
  // const sendPost = () => {
  //   dispatch(addPostCreator());
  // };

  // const updatePost = text => {
  //   dispatch(updatePostTextCreator(text));
  // };

  return (
    <StoreContext.Consumer>
      {store => {
        const {
          profilePage,
          user: { photo }
        } = store.getState();

        const sendPost = () => {
          store.dispatch(addPostCreator());
        };

        const updatePost = text => {
          store.dispatch(updatePostTextCreator(text));
        };
        return (
          <Posts
            data={profilePage}
            userPhoto={photo}
            updatePost={updatePost}
            sendPost={sendPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
