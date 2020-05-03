import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import s from "./User.module.scss";
import {usersAPI} from "../../../api/users";

export const User = props => {
let defaultStatus ="Nothing is more silly than silly laughter";
  const {
    user: { id: userId, name, status, photos: {small: photo}, location = {country:'Earth',city: 'Earth' }, followed },
    follow,
    unFollow,
    toggleFollowingInProgress,
    followingInProgress,
    getUsersThunkCreator
  } = props;

  return (
    <div className={`${s.container}`}>
      <div className={`${s.follow}`}>
        <Avatar size="lg" src={photo} id={userId} />
        {followed ? (
            <button
                className={`${s.follow__btn} ${s.remove}`}
                disabled={followingInProgress.some( id => id === userId)}
                onClick={() => {
                  getUsersThunkCreator();
                  toggleFollowingInProgress(true, userId);
                  usersAPI.unFollowUser(userId)
                      .then(response => {
                        (response.resultCode ===0) && unFollow(userId);
                        toggleFollowingInProgress(false, userId);
                      })
                      .catch(error => console.log(error));
                }}
            >
              Unfollow
            </button>
        ) : (
            <button
                className={`${s.follow__btn} ${s.add}`}
                disabled={followingInProgress.some( id => id === userId)}
                onClick={() => {
                  toggleFollowingInProgress(true, userId);
                  usersAPI.followUser(userId)
                      .then(response => {
                        (response.resultCode ===0) && follow(userId);
                        toggleFollowingInProgress(false, userId);
                      })
                      .catch(error => console.log(error));
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
