import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import s from "./User.module.scss";

export const User = props => {
let defaultStatus ="Nothing is more silly than silly laughter";
  const {
    user: { id, name, status, photos: {small: photo}, location = {country:'Earth',city: 'Earth' }, followed },
    follow,
    unFollow
  } = props;

  return (
    <div className={`${s.container}`}>
      <div className={`${s.follow}`}>
        <Avatar size="lg" src={photo} />
        {followed ? (
          <button
            className={`${s.follow__btn} ${s.remove}`}
            onClick={() => unFollow(id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={`${s.follow__btn} ${s.add}`}
            onClick={() => {
              follow(id);
            }}
          >
            Follow
          </button>
        )}
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
