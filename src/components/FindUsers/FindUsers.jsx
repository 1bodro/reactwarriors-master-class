import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";

export const FindUsers = props => {
  const { users, follow, unFollow } = props;
  return (
    <div className={`${s.container} customScrollbar`}>
      {users.map(user => (
        <User key={user.id} user={user} follow={follow} unFollow={unFollow} />
      ))}
    </div>
  );
};
