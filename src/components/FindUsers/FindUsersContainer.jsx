import {FindUsers} from "./FindUsers";
import { toggleFollowingInProgress, getUsersThunkCreator,toggleFollowing } from "../redux/find_users_reducer";
import { connect } from "react-redux";
import React from "react";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../redux/user-selectors";


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
    const {users, totalUsersCount, pageSize, currentPage , isLoading, followingInProgress, toggleFollowing } = this.props;
    return (
        <FindUsers
            onPageChanged={this.onPageChanged}
            totalUsersCount={totalUsersCount}
            users={users}
            pageSize={pageSize}
            currentPage={currentPage}
            isLoading={isLoading}
            followingInProgress={followingInProgress}
            toggleFollowing={toggleFollowing}
        />
    )
  }

}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

const mapDispatchToProps =  {
  toggleFollowing,
  toggleFollowingInProgress,
  getUsers: getUsersThunkCreator
};

// export const FindUsersContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FindUsersAPIComponent);


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    // AuthRedirectComponent
)(FindUsersAPIComponent);
