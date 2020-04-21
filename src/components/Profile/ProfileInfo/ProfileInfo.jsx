import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import s from "./ProfileInfo.module.scss";

export const ProfileInfo = props => {
  const { user } = props;
  return (
    <div className={s.container}>
      <Avatar size="lg" src={user.photo} />
      <div className={s.desc}>
        <div>{user.name}</div>
      </div>
    </div>
  );
};
