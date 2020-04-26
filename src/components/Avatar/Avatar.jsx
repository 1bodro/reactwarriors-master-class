import React from "react";
import s from "./Avatar.module.scss";
const defaultSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAJAKZq1P0A1fdBSNnqfQG-Hhu6X86SBL3gYO-497l-DTQjZYq&usqp=CAU";

export const Avatar = props => {
  const { size, src } = props;
  return (
    <div className={`${s.photo} ${s[size]}`}>
      <div className="content__img">
        <img src={`${src || defaultSrc}`} alt="ava" />
      </div>
    </div>
  );
};
