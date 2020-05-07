import React from "react";
import {LoginReduxForm} from "./Login";
import {connect} from "react-redux";
import {setLoginUser} from "../redux/auth_reducer";

export const LoginContainerAPI = props => {
    // const onSubmit = formData => console.log(formData);
 return (
        <LoginReduxForm onSubmit={props.setLoginUser}/>
    );
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export const LoginContainer = connect(mapStateToProps, {setLoginUser})(LoginContainerAPI);
