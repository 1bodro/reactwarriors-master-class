import React from "react";
import { PostsContainer } from "./Posts/PostsContainer";

import { ProfileInfoContainer } from "./ProfileInfo/ProfileInfoContainer";

import s from "./Profile.module.scss";

export const Profile = props => {
  // const { store } = props;
  // const { user } = store.getState();

  return (
    <div className={s.container}>
      <ProfileInfoContainer />
      <PostsContainer />
    </div>
  );
};
