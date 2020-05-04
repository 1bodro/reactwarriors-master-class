import React from "react";
import { PostsContainer } from "./Posts/PostsContainer";
import { ProfileInfoContainer } from "./ProfileInfo/ProfileInfoContainer";
import s from "./Profile.module.scss";
import {AuthRedirectComponent} from "../../hoc/withAuthRedirect";

const Profile = () => {
  return (
    <div className={s.container}>
      <ProfileInfoContainer />
      <PostsContainer />
    </div>
  );
};

export default AuthRedirectComponent(Profile);
