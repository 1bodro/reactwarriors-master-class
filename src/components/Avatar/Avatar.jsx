import React from "react";
import s from "./Avatar.module.scss";

export const Avatar = props => {
  const { size, src } = props;
  return (
    <div className={`${s.photo} ${s[size]}`}>
      <div className="content__img">
        <img
          src={src}
          alt="ava"
        />
      </div>
    </div>
  );
};