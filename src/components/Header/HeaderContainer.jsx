import React from "react";
import * as axios from "axios";
import {Header} from "./Header";
import {setAuthUserData} from "../redux/auth_reducer";
import { connect } from "react-redux";

class HeaderContainerAPI extends React.Component {

  componentDidMount() {
    const {setAuthUserData} = this.props;
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
              withCredentials: true
            })
        .then(response => {
          console.log(response.data);
          (response.data.resultCode === 0) && setAuthUserData(response.data.data);
        })
        .catch(error => console.log(error));
  }

  render() {
    return (
        <Header {...this.props} />
    );
  }
};

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    isLoading: state.auth.isLoading,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps ,{setAuthUserData})(HeaderContainerAPI);
