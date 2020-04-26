import { FindUsers } from "./FindUsers";
import { setUsersAC, followAC, unFollowAC } from "../redux/find_users_reduser";
import { connect } from "react-redux";
import { findUsersPage } from "../redux/data";

const mapStateToProps = state => {
  return {
    users: findUsersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsers);
