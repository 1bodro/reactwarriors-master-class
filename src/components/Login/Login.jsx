import React from "react";
import s from "./Login.module.scss";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
const LoginForm = props => {
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

  return (
      <div className={s.container}>
          <span>LOGIN</span>
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={s.summaryError}>{props.error}</div>}
            <div className=""><Field type= "text" placeholder="login" name="email" component={Input} validate={[required]} /></div>
            <div className=""><Field type="text" placeholder="Password" name="password" component={Input} validate={[required]} /></div>
            <div className=""><Field type="checkbox" component={"input"} name="rememberMe" />Remember me</div>
            <div className=""><button>Login</button></div>
        </form>
      </div>
  );
};
//a unique name for the form
export const LoginReduxForm=reduxForm({form: 'loginUser'})(LoginForm);