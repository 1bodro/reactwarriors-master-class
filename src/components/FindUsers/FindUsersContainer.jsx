import { FindUsers } from "./FindUsers";
import { setUsersAC, followAC, unFollowAC } from "../redux/find_users_reduser";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    users: state.findUsersPage.users
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
    }
  };
};

export const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsers);
