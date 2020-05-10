import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";

export const Header = props => {
    const {isAuth, login, setLogoutUser} = props;
  return (
    <header className={s.container}>
      <div className={s.logo}>
        <img
          src="https://image.freepik.com/free-photo/man-through-hole-paper_1368-47349.jpg"
          alt="logo"
        />
      </div>
        {isAuth
        ? <div>
                <NavLink to={`/profile`} className={s.name}>{login}</NavLink>
                <button className={s.btn} onClick={setLogoutUser}>
                    logout
                </button>
            </div>
        : <NavLink to={`/login`} className={s.btn}>Login</NavLink>}
    </header>
  );
};
