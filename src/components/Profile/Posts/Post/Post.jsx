import React from "react";
import { Avatar } from "../../../Avatar/Avatar";
import s from "./Post.module.scss";

export const Post = props => {
  const { message, likesCout, photo } = props;

  return (
    <div className={s.container}>
      <Avatar size="sm" src={photo} />
      <div className={s.text}>{message || "server didn't find message"}</div>
      <span className={s.like}>Like: {likesCout}</span>
    </div>
  );
};
