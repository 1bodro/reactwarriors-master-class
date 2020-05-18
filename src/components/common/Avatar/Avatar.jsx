import React from "react";
import s from "./Avatar.module.scss";
import {NavLink} from "react-router-dom";

const defaultSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAJAKZq1P0A1fdBSNnqfQG-Hhu6X86SBL3gYO-497l-DTQjZYq&usqp=CAU";

const AvaImg = ({src}) => (
    <div className="content__img">
        <img src={`${src || defaultSrc}`} alt="ava"/>
    </div>
);

export const Avatar = props => {
  const { size, src, id='' } = props;
  return (
      <NavLink
          to={`/profile/${id}`}
          className={`${s.photo} ${s[size]}`}
      >
      <AvaImg  src={src}/>
    </NavLink>
  );
};

export const UserAvatar = ({savePhoto,size, src, id='', ...props }) => {
    const onMainPhotoSelected= e => {e.target.files && savePhoto(e.target.files[0])};
    return (
        <label htmlFor="loadingImg" className={`${s.photo} ${s[size]}`}>
            <AvaImg  src={src}/>
            <input className={s.hideInput} id="loadingImg" type={"file"} onChange={onMainPhotoSelected}/>
        </label>
    );
}