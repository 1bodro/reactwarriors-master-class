import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../Avatar/Avatar";
import s from "./Dialog.module.scss";

export const Dialog = props => {
  const { dialogData } = props;
  const { name, id, photo } = dialogData;
  return (
    <div className={`${s.dialog}`}>
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
