import React from "react";
import s from "./Avatar.module.scss";

export const Avatar = props => {
  const { size } = props;
  return (
    <div className={`${s.photo} ${s[size]}`}>
      <div className="content__img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU"
          alt="ava"
        />
      </div>
    </div>
  );
};
