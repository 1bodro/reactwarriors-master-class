import React from "react";
import {LoginReduxForm} from "./Login";
import {connect} from "react-redux";
import {setLoginUser} from "../redux/auth_reducer";

export const LoginContainerAPI = ({setLoginUser,...props}) => {
    // const onSubmit = formData => props.setLoginUser(formData);
 return (
        <LoginReduxForm onSubmit={setLoginUser} {...props}/>
    );
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl});


export default connect(mapStateToProps, {setLoginUser})(LoginContainerAPI);
