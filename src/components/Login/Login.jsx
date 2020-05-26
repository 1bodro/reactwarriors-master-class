import React from "react";
import s from "./Login.module.scss";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
const LoginForm = ({isAuth, handleSubmit, error, captchaUrl, ...props}) => {
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

  return (
    <form className={s.container} onSubmit={handleSubmit}>
        {error && <div className={s.summaryError}>{error}</div>}
        <div className={s.fieldBlock}><Field type= "text" placeholder="login" name="email" component={Input} validate={[required]} /></div>
        <div className={s.fieldBlock}><Field type="password" placeholder="Password" name="password" component={Input} validate={[required]} /></div>
        <div className={s.fieldBlock}><Field type="checkbox" component={"input"} name="rememberMe" />Remember me</div>
        <div className={s.fieldBlock}><button className={s.btnSend}>Login</button></div>
        {captchaUrl && (
            <>
                <img src={captchaUrl} />
                <div className={s.fieldBlock}><Field type= "text" placeholder="captcha" name="captcha" component={Input} validate={[required]} /></div>
            </>
            )}
    </form>
  );
};
//a unique name for the form
export const LoginReduxForm=reduxForm({form: 'loginUser'})(LoginForm);