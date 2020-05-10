import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import {getProfile, getUpdateUserStatus, getUserStatus} from "../../redux/profile_reducer";



class ProfileInfoContainerAPI extends React.Component {

  componentDidMount() {
    const { getProfile, getUserStatus, userId} =this.props;
    getProfile(userId);
    getUserStatus(userId);
  }

  render() {
    const { profile,status, isLoading, getUpdateUserStatus } = this.props;
    return (
        <ProfileInfo profile={profile} status={status} isLoading={isLoading} getUpdateUserStatus={getUpdateUserStatus}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  };
};

export const ProfileInfoContainer = connect(mapStateToProps ,{getProfile,getUserStatus, getUpdateUserStatus})(ProfileInfoContainerAPI);
