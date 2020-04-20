import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Message.module.scss";

export const Message = props => {
  const { message } = props;
  return <div className={s.message}>{message}</div>;
};
