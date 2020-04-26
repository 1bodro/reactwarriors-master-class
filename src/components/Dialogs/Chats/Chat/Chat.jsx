import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../../Avatar/Avatar";
import s from "./Chat.module.scss";

export const Chat = props => {
  const {
    chat: { name, id, photo }
  } = props;

  return (
    <div className={`${s.container}`}>
      <NavLink
        to={`/messages/${id}`}
        className={s.navLink}
        activeClassName={s.active}
      >
        <Avatar size="sm" src={photo} />
        <span className={s.name}>{name}</span>
      </NavLink>
    </div>
  );
};
