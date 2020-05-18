import React from "react";
import {Avatar, UserAvatar} from "../../common/Avatar/Avatar";
import s from "./ProfileInfo.module.scss";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";


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
                        <ProfileData profile={profile} />
                    </div>
                </>}
        </div>
    );
};

const Contact = ({name, value}) => {
    return <div><b>{name}:</b> {value}</div>
}

const ProfileData = ({profile}) => {
    return (
        <div className={s.desc}>
            <div>
                <b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My profile skills:</b> {profile.lookingForAJob}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe ? profile.aboutMe : null}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((contact, i) => <Contact key={i} name={contact}
                                                                                        value={profile.contacts[contact]}/>)}
            </div>
        </div>
)
}