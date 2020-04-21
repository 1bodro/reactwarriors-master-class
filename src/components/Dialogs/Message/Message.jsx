import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Message.module.scss";
import { Avatar } from "../../Avatar/Avatar";

const defaultSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAJAKZq1P0A1fdBSNnqfQG-Hhu6X86SBL3gYO-497l-DTQjZYq&usqp=CAU";

export const Message = props => {
  const { message, user } = props;

  return (
    <div
      className={`${s.container} ${user.id === message.idUser ? s.myself : ""}`}
    >
      <Avatar
        size="sm"
        src={user.id === message.idUser ? user.photo : defaultSrc}
      />
      <p className={s.text}>{message.text}</p>
    </div>
  );
};
