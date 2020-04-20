import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.scss";

export const Dialog = props => {
  const { name, id } = props;
  return (
    <div className={`${s.dialog}`}>
      <NavLink
        to={`/dialogs/${id}`}
        className={s.navLink}
        activeClassName={s.active}
      >
        {name}
      </NavLink>
    </div>
  );
};
