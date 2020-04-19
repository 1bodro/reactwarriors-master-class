import React from "react";
import { Avatar } from "../../../Avatar/Avatar";
import s from "./Post.module.scss";

export const Post = () => {
  return (
    <div className="post">
      <Avatar size="sm" />
      <div className="posts__list">My Post#2</div>
      <span> Like</span>
    </div>
  );
};
