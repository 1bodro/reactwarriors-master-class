import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import * as axios from "axios";

export default class FindUsers extends React.Component {
  constructor() {
    super(null);
  }

getUsers = () => {
  const {users: usersList, setUsers} = this.props;
  if (usersList.length === 0) {
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => setUsers(response.data.items))
        .catch(error => console.log(error));
  }
}
render()
{
  const {users: usersList, follow, unFollow} = this.props;
  return (
      <div className={`${s.container} customScrollbar`}>
        <button
            onClick={this.getUsers}
        >add</button>
        {usersList.map(user => (
            <User key={user.id} user={user} follow={follow} unFollow={unFollow}/>
        ))}
      </div>
  )
}

}