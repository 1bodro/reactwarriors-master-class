import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import s from "./User.module.scss";
import * as axios from "axios";

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
        <Avatar size="lg" src={photo} id={id} />
        {followed ? (
            <button
                className={`${s.follow__btn} ${s.remove}`}
                onClick={() => {
                  axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                          {
                            headers: {
                              "API-KEY": '00d2fa15-e31d-4426-b266-27f25c4e7bcb'
                            },
                            withCredentials: true
                          })
                      .then(response => (response.data.resultCode ===0) && unFollow(id))
                      .catch(error => console.log(error));
                }}
            >
              Unfollow
            </button>
        ) : (
            <button
                className={`${s.follow__btn} ${s.add}`}
                onClick={() => {
                  axios
                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},
                          {
                            headers: {
                              "API-KEY": '00d2fa15-e31d-4426-b266-27f25c4e7bcb'
                            },
                            withCredentials: true
                          })
                      .then(response => (response.data.resultCode ===0) && follow(id))
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
