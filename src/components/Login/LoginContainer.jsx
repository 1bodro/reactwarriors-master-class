import React from "react";
import {LoginReduxForm} from "./Login";
import {connect} from "react-redux";
import {setLoginUser} from "../redux/auth_reducer";

export const LoginContainerAPI = props => {
    // const onSubmit = formData => props.setLoginUser(formData);
 return (
        <LoginReduxForm onSubmit={props.setLoginUser} {...props}/>
    );
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});


export default connect(mapStateToProps, {setLoginUser})(LoginContainerAPI);
