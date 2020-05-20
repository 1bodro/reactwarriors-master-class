import React, {useState} from "react";
import {Avatar, UserAvatar} from "../../common/Avatar/Avatar";
import s from "./ProfileInfo.module.scss";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileData, ProfileDataFormRedux} from "./ProfileData/ProfileData";


const defaultSrcBanner = "https://upload.wikimedia.org/wikipedia/commons/9/9f/US_Virgin_Islands_banner_Turtle_Bay_Beach.jpg";
export const ProfileInfo = props => {
    const {profile, status, isLoading, getUpdateUserStatus, isOwner, savePhoto, saveProfile} = props;
    const [editMode, setEditMode] = useState(false);
    const onSubmit = formData => {
        console.log(formData);
        saveProfile(formData)
    }

    return (
        <div className={s.container}>
            {isLoading
                ? <Preloader/>
                : <>
                    <div className={s.banner}>
                        <div className="content__img">
                            <img
                                src={defaultSrcBanner}
                                alt="wallpaper"
                            />
                        </div>
                    </div>
                    <div className={s.info}>
                        {isOwner
                        ? <UserAvatar size="lg" src={profile.photos? profile.photos.large : null} id={profile.userId} savePhoto={savePhoto} />
                        : <Avatar size="lg" src={profile.photos? profile.photos.large : null} id={profile.userId}/>}
                        <div className={s.desc}>
                            <div>{profile.fullName}</div>
                            <ProfileStatusWithHooks getUpdateUserStatus={getUpdateUserStatus} status={status} />
                        </div>
                        <div className={s.desc}>
                            {editMode
                                ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit}/>
                                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
                        </div>
                    </div>
                </>}
        </div>
    );
};