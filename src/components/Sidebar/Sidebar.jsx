import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <nav className={s.container}>
      <NavLink
        to="/profile"
        className={s.navLink}
        activeClassName={s.active}
      >
        Profile
      </NavLink>
      <NavLink to="/messages/" className={s.navLink} activeClassName={s.active}>
        Messages
      </NavLink>
      <NavLink
        exact
        to="/news"
        className={s.navLink}
        activeClassName={s.active}
      >
        News
      </NavLink>
      <NavLink
        exact
        to="/music"
        className={s.navLink}
        activeClassName={s.active}
      >
        Music
      </NavLink>
      <NavLink
        exact
        to="/users"
        className={s.navLink}
        activeClassName={s.active}
      >
        Find users
      </NavLink>
      <NavLink
        exact
        to="/settings"
        className={s.navLink}
        activeClassName={s.active}
      >
        Settings
      </NavLink>
    </nav>
  );
};
