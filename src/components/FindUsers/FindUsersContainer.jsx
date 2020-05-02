import {FindUsers} from "./FindUsers";
import { setUsers, follow, unFollow,setCurrentPage, setUsersTotalCurrentPage, setIsLoading } from "../redux/find_users_reducer";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";

class FindUsersAPIComponent extends React.Component {

  componentDidMount() {
    const { setUsers, pageSize, currentPage,setUsersTotalCurrentPage,setIsLoading } = this.props;
    setIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          setUsers(response.data.items);
          setUsersTotalCurrentPage(response.data.totalCount);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
  }

  onPageChanged = currentPage => {
    const {setCurrentPage, pageSize,setUsers, setIsLoading} = this.props;
    setCurrentPage(currentPage);
    setIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          setIsLoading(false);
              setUsers(response.data.items)
            }
        )
        .catch(error => console.log(error));
  }

  render() {
    const {users, follow, unFollow, totalUsersCount, pageSize, currentPage , isLoading} = this.props;
    return (
        <FindUsers
            onPageChanged={this.onPageChanged}
            totalUsersCount={totalUsersCount}
            users={users}
            follow={ follow}
            unFollow={ unFollow}
            pageSize={pageSize}
            currentPage={currentPage}
            isLoading={isLoading}
        />
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
    isLoading: state.findUsersPage.isLoading
  };
};

const mapDispatchToProps =  {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCurrentPage,
  setIsLoading
};

export const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersAPIComponent);
