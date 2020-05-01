import {FindUsers} from "./FindUsers";
import { setUsersAC, followAC, unFollowAC,setCurrentPageAC, setUsersTotalCurrentPageAC, setIsLoadingAC } from "../redux/find_users_reducer";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";

class FindUsersAPIComponent extends React.Component {

  componentDidMount() {
    const { setUsers, pageSize, currentPage,setUsersTotalCurrentPage,toggleIsLoading } = this.props;
    toggleIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          setUsers(response.data.items);
          setUsersTotalCurrentPage(response.data.totalCount);
          toggleIsLoading(false);
        })
        .catch(error => console.log(error));
  }

  onPageChanged = currentPage => {
    const {setCurrentPage, pageSize,setUsers, toggleIsLoading} = this.props;
    setCurrentPage(currentPage);
    toggleIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
              toggleIsLoading(false);
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

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unFollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setUsersTotalCurrentPage: totalUsersCount => {
      dispatch(setUsersTotalCurrentPageAC(totalUsersCount));
    },
    toggleIsLoading: isLoading => {
      dispatch(setIsLoadingAC(isLoading));
    }
  };
};

export const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersAPIComponent);
