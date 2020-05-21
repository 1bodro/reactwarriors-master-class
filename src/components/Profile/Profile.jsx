import React from "react";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";
import s from "./Profile.module.scss";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Icons} from "../common/Icons/Icons";

class Profile extends React.PureComponent {

    render() {
        const {match, authUserId} = this.props;
        const userId = match.params.userId || authUserId;
        const isOwner = !!(!match.params.userId && authUserId);
        return userId
            ? (
                <div className={s.container}>
                    <Icons/>
                    <ProfileInfoContainer userId={userId} isOwner={isOwner}/>
                    {isOwner ? <PostsContainer/> : null}
                </div>
            )
            : <Redirect to={"/login"}/>
    }
}

const mapStateToProps = state => {
    return {
        authUserId: state.auth.id,
        profile: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps, null),
    withRouter)(Profile);
