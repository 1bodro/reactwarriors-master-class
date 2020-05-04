import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../redux/profile_reducer";



class ProfileInfoContainerAPI extends React.Component {

  componentDidMount() {
    const {match, getProfile} =this.props;
    const userId = match.params.userId ||10;
    getProfile(userId);
  }

  render() {
    const { profile, isLoading } = this.props;
    return (
        <ProfileInfo profile={profile} isLoading={isLoading}/>
    );
  }
};

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileInfoContainerAPI);

export const ProfileInfoContainer = connect(mapStateToProps ,{getProfile})(WithUrlDataContainerComponent);
