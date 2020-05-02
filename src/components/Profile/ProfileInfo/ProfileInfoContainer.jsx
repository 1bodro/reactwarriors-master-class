import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import {setUserProfile, setIsLoading} from "../../redux/profile_reducer";



class ProfileInfoContainerAPI extends React.Component {

  componentDidMount() {
    const {setUserProfile, setIsLoading} =this.props;
    setIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
          setUserProfile(response.data);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
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

export const ProfileInfoContainer = connect(mapStateToProps ,{setUserProfile, setIsLoading})(ProfileInfoContainerAPI);
