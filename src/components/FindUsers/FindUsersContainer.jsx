import {FindUsers} from "./FindUsers";
import { toggleFollowingInProgress, getUsersThunkCreator,toggleFollowing } from "../redux/find_users_reducer";
import { connect } from "react-redux";
import React from "react";


class FindUsersAPIComponent extends React.Component {

  componentDidMount() {
    const { pageSize, currentPage, getUsers } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = currentPage => {
    const { pageSize, getUsers} = this.props;
    getUsers(currentPage, pageSize);
    // before thunks
    // setCurrentPage(currentPage);
    // setIsLoading(true);
    // usersAPI.getUsers(currentPage, pageSize)
    //     .then(response => {
    //       setIsLoading(false);
    //           setUsers(response.items)
    //         }
    //     )
    //     .catch(error => console.log(error));
  }

  render() {
    const {users, totalUsersCount, pageSize, currentPage , isLoading, followingInProgress, toggleFollowingInProgress,toggleFollowing } = this.props;
    return (
        <FindUsers
            onPageChanged={this.onPageChanged}
            totalUsersCount={totalUsersCount}
            users={users}
            pageSize={pageSize}
            currentPage={currentPage}
            isLoading={isLoading}
            followingInProgress={followingInProgress}
            toggleFollowingInProgress={toggleFollowingInProgress}
            toggleFollowing={toggleFollowing}
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
    isLoading: state.findUsersPage.isLoading,
    followingInProgress: state.findUsersPage.followingInProgress,
  };
};

const mapDispatchToProps =  {
  toggleFollowing,
  toggleFollowingInProgress,
  getUsers: getUsersThunkCreator
};

export const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersAPIComponent);
