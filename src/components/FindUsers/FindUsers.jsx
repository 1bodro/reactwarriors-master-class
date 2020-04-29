import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import * as axios from "axios";
export const FindUsers = props => {
  const { users: usersList, follow, unFollow, setUsers } = props;

  if (usersList.length === 0) {
    // ,
    // {
    //   headers: {
    // "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     crossdomain: true,
    //     "API-KEY": "00d2fa15-e31d-4426-b266-27f25c4e7bcb"
    // https://cors-anywhere.herokuapp.com/
    //   }
    // }
  }
  console.log(axios.defaults);

  axios
    .get(
      "https://social-network.samuraijs.com/api/1.1/users",
      {
        headers: {
          "Access-Control-Allow-Origin": "https://codesandbox.io",
          "Origin": "https://codesandbox.io"
        }
      }
    )
    .then(response => console.log("response", response))
    .catch(error => console.log(error));

  return (
    <div className={`${s.container} customScrollbar`}>
      {usersList.map(user => (
        <User key={user.id} user={user} follow={follow} unFollow={unFollow} />
      ))}
    </div>
  );
};
