import React from "react";
import { Posts } from "./Posts/Posts";
import { Avatar } from "../Avatar/Avatar";
import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={s.container}>
      <div className="profile__baner">
        <div className="content__img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/US_Virgin_Islands_banner_Turtle_Bay_Beach.jpg"
            alt="wallpaper"
          />
        </div>
      </div>
      <div className={s.info}>
        <Avatar size = 'lg' />
        <div className={s.desc}>
          <div>Dmitro</div>
        </div>
      </div>
      <Posts />
    </div>
  );
};
