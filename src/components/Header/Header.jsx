import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../assets/img/logo.jpg";

export const Header = props => {
    const {isAuth, login, setLogoutUser} = props;
  return (
    <header className={s.container}>
      <div className={s.logo}>
        <img
          src={logo}
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
