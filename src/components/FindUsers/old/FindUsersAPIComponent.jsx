import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import {Pagination} from "../Pagination/Pagination";
import * as axios from "axios";

export default class FindUsers extends React.Component {

  componentDidMount() {
    const { setUsers, pageSize, currentPage,setUsersTotalCurrentPage} = this.props;
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          setUsers(response.data.items);
          setUsersTotalCurrentPage(response.data.totalCount);
        })
        .catch(error => console.log(error));
  }

  onPageChanged = currentPage => {
    const {setCurrentPage, pageSize,setUsers} = this.props;
    setCurrentPage(currentPage);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => setUsers(response.data.items))
        .catch(error => console.log(error));
  }

  render() {
      const {users, follow, unFollow, totalUsersCount, pageSize, currentPage} = this.props;
    return (
        <FindUsers onPageChanged={this.onPageChanged} totalUsersCount={totalUsersCount} users={users}  follow={ follow} un unFollow={ unFollow} pageSize={pageSize} currentPage={currentPage} />
    )
  }

}