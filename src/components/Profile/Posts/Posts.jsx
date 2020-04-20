import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = props => {
  const { data: postsData } = props;

  const postsElements = postsData.map(post => (
    <Post message={post.text} likesCout={post.likesCout} />
  ));
  return (
    <div className={s.container}>
      <h3 className="header">My Posts</h3>
      <div className="write">
        <textarea defaultValue="Write here..." className="textarea" />
        <button>send</button>
      </div>
      <div className={s.storage}>{postsElements}</div>
    </div>
  );
};
