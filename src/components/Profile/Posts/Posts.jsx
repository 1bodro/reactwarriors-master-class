import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = () => {
  return (
    <div className="container">
      <h3 className="header">My Posts</h3>
      <div className="write">
        <textarea className="textarea">Write here</textarea>
        <button>send</button>
      </div>
      <div className="storage">
        <Post />
      </div>
    </div>
  );
};
