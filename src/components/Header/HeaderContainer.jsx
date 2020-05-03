import React from "react";
import {Header} from "./Header";
import {setAuthUserData} from "../redux/auth_reducer";
import { connect } from "react-redux";
import {authAPI} from "../../api/auth";

class HeaderContainerAPI extends React.Component {

  componentDidMount() {
      const {setAuthUserData} = this.props;
      authAPI.getAuth()
          .then(response => {
              (response.resultCode === 0) && setAuthUserData(response.data);
          })
          .catch(error => console.log(error));
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

export default connect(mapStateToProps ,{setAuthUserData})(HeaderContainerAPI);
