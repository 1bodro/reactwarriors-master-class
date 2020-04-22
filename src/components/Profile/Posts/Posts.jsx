import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = props => {
  const { userPhoto, addPost, updatePostText } = props;
  const { posts, newPostText } = props.data;

  const postsElements = posts.map(post => (
    <Post message={post.text} likesCout={post.likesCout} photo={userPhoto} />
  ));

  let textareaRef = React.createRef();

  const sendPost = () => {
    addPost();
    // updatePostText("");
  };

  const updatePost = () => {
    updatePostText(textareaRef.current.value);
  };

  return (
    <div className={s.container}>
      <div className={s.write}>
        <textarea
          ref={textareaRef}
          defaultValue="Write here..."
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
