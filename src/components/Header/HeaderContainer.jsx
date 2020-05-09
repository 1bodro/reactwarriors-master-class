import React from "react";
import {Header} from "./Header";
import {getAuthUserData, setLogoutUser} from "../redux/auth_reducer";
import { connect } from "react-redux";

class HeaderContainerAPI extends React.Component {

  componentDidMount() {
      const {getAuthUserData} = this.props;
      getAuthUserData();
  }

  render() {
    return (
        <Header {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    isLoading: state.auth.isLoading,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps ,{getAuthUserData, setLogoutUser})(HeaderContainerAPI);
