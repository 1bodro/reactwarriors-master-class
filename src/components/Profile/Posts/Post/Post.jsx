import React from "react";
import { Avatar } from "../../../Avatar/Avatar";
import s from "./Post.module.scss";


export const Post = props => {
  const { message, likesCout } = props;

  return (
    <div className="post">
      <Avatar size="sm" />
      <div className="text">{message || "server didn't find message"}</div>
      <span>Like: {likesCout}</span>
    </div>
  );
};
