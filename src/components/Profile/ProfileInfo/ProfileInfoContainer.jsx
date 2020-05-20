import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import React from "react";
import {getProfile, getUpdateUserStatus, getUserStatus, savePhoto, saveProfile} from "../../redux/profile_reducer";




class ProfileInfoContainerAPI extends React.PureComponent {

  componentDidMount() {
    const { getProfile, getUserStatus, userId, isOwner } =this.props;
    getProfile(userId, isOwner);
    getUserStatus(userId);
  }


  componentDidUpdate(prevProps, prevState) {
    const { getProfile, getUserStatus, userId } =this.props;
    if (prevProps.userId !== userId) {
      getProfile(userId);
      getUserStatus(userId);
    }
  }

  render() {
    const { profile, status, isLoading, getUpdateUserStatus, isOwner, savePhoto, saveProfile } = this.props;
    return (
        <ProfileInfo
            profile={profile}
            status={status}
            isLoading={isLoading}
            getUpdateUserStatus={getUpdateUserStatus}
            isOwner={isOwner}
            savePhoto={savePhoto}
            saveProfile={saveProfile} />
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

export const ProfileInfoContainer = connect(mapStateToProps ,{getProfile,getUserStatus, getUpdateUserStatus, savePhoto, saveProfile})(ProfileInfoContainerAPI);
