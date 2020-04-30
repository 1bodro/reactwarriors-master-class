import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import * as axios from "axios";
export const FindUsers = props => {
  const { users: usersList, follow, unFollow, setUsers } = props;
const getUsers = () => {
  if (usersList.length === 0) {
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => setUsers(response.data.items))
        .catch(error => console.log(error));
  }
}

  return (
    <div className={`${s.container} customScrollbar`}>
      {usersList.map(user => (
        <User key={user.id} user={user} follow={follow} unFollow={unFollow} />
      ))}
    </div>
  );
};
