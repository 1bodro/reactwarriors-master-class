import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";
import {
  addPostCreator,
  updatePostTextCreator
} from "../../redux/profile_reduser";

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
    dispatch(addPostCreator());
    // addPost();
    // updatePostText("");
  };

  const updatePost = () => {
    dispatch(updatePostTextCreator(textareaRef.current.value));
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
