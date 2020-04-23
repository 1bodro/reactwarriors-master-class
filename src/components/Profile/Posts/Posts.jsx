import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from "../../redux/state";

export const Posts = props => {
  const {
    userPhoto,
    dispatch,
    data: { posts, newPostText }
  } = props;

  const postsElements = posts.map(post => (
    <Post message={post.text} likesCout={post.likesCout} photo={userPhoto} />
  ));

  let textareaRef = React.createRef();

  const sendPost = () => {
    dispatch(addPostActionCreator());
    // addPost();
    // updatePostText("");
  };

  const updatePost = () => {
    dispatch(updatePostTextActionCreator(textareaRef.current.value));
    // updatePostText(textareaRef.current.value);
  };

  return (
    <div className={s.container}>
      <div className={s.write}>
        <textarea
          ref={textareaRef}
          value={newPostText}
          className="textarea"
          onChange={updatePost}
        />
        <button className={s.btnSend} onClick={sendPost}>
          send
        </button>
      </div>
      <div className={`${s.storage} customScrollbar`}>{postsElements}</div>
    </div>
  );
};
