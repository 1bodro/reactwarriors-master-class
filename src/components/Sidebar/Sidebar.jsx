import React from "react";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <nav className={s.container}>
      <span className={`${s.navLink} ${s.active}`}>Profile</span>
      <span className={s.navLink}>Message</span>
      <span className={s.navLink}>News</span>
      <span className={s.navLink}>Music</span>
      <span className={s.navLink}>Settings</span>
    </nav>
  );
};
