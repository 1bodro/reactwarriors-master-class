import React from "react";
import { Posts } from "./Posts/Posts";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

import s from "./Profile.module.scss";

export const Profile = props => {
  const { data } = props;
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <div className="content__img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/US_Virgin_Islands_banner_Turtle_Bay_Beach.jpg"
            alt="wallpaper"
          />
        </div>
      </div>
      <ProfileInfo />
      <Posts data={data} />
    </div>
  );
};
