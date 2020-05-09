import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {getProfile, getUserStatus, getUpdateUserStatus} from "../../redux/profile_reducer";



class ProfileInfoContainerAPI extends React.Component {

  componentDidMount() {
    const {match, getProfile, getUserStatus} =this.props;
    const userId = match.params.userId||7602;
    getProfile(userId);
    getUserStatus(userId);
  }

  render() {
    const { profile, isLoading } = this.props;
    return (
        <ProfileInfo profile={profile} isLoading={isLoading} />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileInfoContainerAPI);

export const ProfileInfoContainer = connect(mapStateToProps ,{getProfile,getUserStatus, getUpdateUserStatus})(WithUrlDataContainerComponent);
