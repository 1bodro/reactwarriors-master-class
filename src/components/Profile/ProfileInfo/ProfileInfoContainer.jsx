import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import {getProfile, getUserStatus} from "../../redux/profile_reducer";



class ProfileInfoContainerAPI extends React.Component {

  componentDidMount() {
    const { getProfile, getUserStatus, userId} =this.props;
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
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
  };
};

export const ProfileInfoContainer = connect(mapStateToProps ,{getProfile,getUserStatus})(ProfileInfoContainerAPI);
