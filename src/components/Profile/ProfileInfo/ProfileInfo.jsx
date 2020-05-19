import React from "react";
import {Avatar, UserAvatar} from "../../common/Avatar/Avatar";
import s from "./ProfileInfo.module.scss";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileDataGuest, ProfileDataUser} from "./ProfileData/ProfileData";


const defaultSrcBanner = "https://upload.wikimedia.org/wikipedia/commons/9/9f/US_Virgin_Islands_banner_Turtle_Bay_Beach.jpg";
export const ProfileInfo = props => {
    const {profile, status, isLoading, getUpdateUserStatus, isOwner, savePhoto} = props;

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
                        {isOwner? <ProfileDataUser profile={profile} /> : <ProfileDataGuest profile={profile} />}
                    </div>
                </>}
        </div>
    );
};