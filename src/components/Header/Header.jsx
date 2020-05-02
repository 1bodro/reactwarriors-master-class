import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.logo}>
        <img
          src="https://image.freepik.com/free-photo/man-through-hole-paper_1368-47349.jpg"
          alt="logo"
        />
      </div>
        <NavLink to={`/login`} className={s.login}>Login</NavLink>
    </header>
  );
};
