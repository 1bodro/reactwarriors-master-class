import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import * as axios from "axios";

export default class FindUsers extends React.Component {
  constructor() {
    super(null);
      axios
          .get("https://social-network.samuraijs.com/api/1.0/users")
          .then(response => this.props.setUsers(response.data.items))
          .catch(error => console.log(error));
  }

render()
{
  const {users: usersList, follow, unFollow} = this.props;
  return (
      <div className={`${s.container} customScrollbar`}>
        {usersList.map(user => (
            <User key={user.id} user={user} follow={follow} unFollow={unFollow}/>
        ))}
      </div>
  )
}

}