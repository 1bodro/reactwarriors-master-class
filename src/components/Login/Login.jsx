import React from "react";
import s from "./Login.module.scss";
import {Field, reduxForm} from "redux-form"

const LoginForm = props => {
  return (
      <div className={s.container}>
          <span>LOGIN</span>
        <form onSubmit={props.handleSubmit}>
            <div className=""><Field type= "text" placeholder="login" name="email" component={"input"} /></div>
            <div className=""><Field type="text" placeholder="Password" name="password" component={"input"} /></div>
            <div className=""><Field type="checkbox" component={"input"} name="rememberMe" />Remember me</div>
            <div className=""><button>Login</button></div>
        </form>
      </div>
  );
};
//a unique name for the form
export const LoginReduxForm=reduxForm({form: 'loginUser'})(LoginForm);