import React from "react";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";

export const AuthRedirectComponent = Component => {

    class RedirectComponent extends React.Component {
        render() {
            return (
                !this.props.isAuth
                    ? <Redirect to={"/login"}/>
                    : <Component {...this.props}/>
            )
        }
    }

    const MapStateToProps = state => ({isAuth: state.auth.isAuth});

    const ConnectAuthRedirectComponent = connect(MapStateToProps) (RedirectComponent);

    return ConnectAuthRedirectComponent;
}