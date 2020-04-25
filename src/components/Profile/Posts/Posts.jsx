import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = props => {
  const {
    updatePost,
    sendPost,
    userPhoto,
    data: { posts, newPostText }
  } = props;

  const postsElements = posts.map(post => (
    <Post message={post.text} likesCout={post.likesCout} photo={userPhoto} />
  ));

  let textareaRef = React.createRef();

  const onSendPost = () => {
    sendPost();
    // addPost();
    // updatePostText("");
  };

  const onUpdatePost = () => {
    updatePost(textareaRef.current.value);
    // updatePostText(textareaRef.current.value);
  };
 
  return (
    <div className={s.container}>
      <div className={s.write}>
        <textarea
          ref={textareaRef}
          value={newPostText}
          className="textarea"
          onChange={onUpdatePost}
        />
        <button className={s.btnSend} onClick={onSendPost}>
          send
        </button>
      </div>
      <div className={`${s.storage} customScrollbar`}>{postsElements}</div>
    </div>
  );
};
