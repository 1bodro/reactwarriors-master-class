import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import s from "./ProfileInfo.module.scss";

export const ProfileInfo = props => {
  return (
    <div className={s.container}>
      <Avatar size="lg" />
      <div className={s.desc}>
        <div>Dmitro</div>
      </div>
    </div>
  );
};
