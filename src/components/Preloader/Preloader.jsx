import React from "react";
import loading from "../../assets/svg/loading.svg";
import s from "./Preloader.module.scss";

export const Preloader = () => {
  return (
      <div className={s.container}>
        <img src={loading} alt="Preload"/>
      </div>
  );
};
