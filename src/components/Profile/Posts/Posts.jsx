import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = props => {
  const { data: postsData, userPhoto, addPost } = props;

  const postsElements = postsData.map(post => (
    <Post message={post.text} likesCout={post.likesCout} photo={userPhoto} />
  ));

  let textareaRef = React.createRef();

  const sendPost = () => addPost(textareaRef.current.value); 

  return (
    <div className={s.container}>
      <div className={s.write}>
        <textarea
          ref={textareaRef}
          defaultValue="Write here..."
          className="textarea"
        />
        <button className={s.btnSend} onClick={sendPost}>
          send
        </button>
      </div>
      <div className={`${s.storage} customScrollbar`}>{postsElements}</div>
    </div>
  );
};
