import React from "react";
import { Avatar } from "../../common/Avatar/Avatar";
import s from "./User.module.scss";

export const User = props => {
let defaultStatus ="Nothing is more silly than silly laughter";
  const {
    user: { id: userId, name, status, photos: {small: photo}, location = {country:'Earth',city: 'Earth' }, followed },
    followingInProgress,
    toggleFollowing
  } = props;


  return (
    <div className={`${s.container}`}>
      <div className={`${s.follow}`}>
        <Avatar size="lg" src={photo} id={userId} />
        <button
            className={`${s.follow__btn} ${followed? s.remove : s.add}`}
            disabled={followingInProgress.some( id => id === userId)}
            onClick={() => {
              toggleFollowing(userId, !followed);
            }}
        >
          {followed ? 'Unfollow' : 'Follow' }
        </button>
      </div>
      <div className={`${s.info}`}>
        <div className={`${s.info__desc}`}>
          <span className={s.info__name}>{name}</span>
          <p className={s.info__status}>{status||defaultStatus}</p>
        </div>
        <div className={`${s.info__location}`}>
          <span>{location.country}</span>
          <span>{location.city}</span>
        </div>
      </div>
    </div>
  );
};
