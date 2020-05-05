import React from "react";
import {Avatar} from "../../Avatar/Avatar";
import s from "./ProfileInfo.module.scss";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


const defaultSrcBanner = "https://upload.wikimedia.org/wikipedia/commons/9/9f/US_Virgin_Islands_banner_Turtle_Bay_Beach.jpg";
export const ProfileInfo = props => {
    const {profile, isLoading} = props;

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
                        <Avatar size="lg" src={profile.photos.large} id={profile.userId}/>
                        <div className={s.desc}>
                            <div>{profile.fullName}</div>
                            <ProfileStatus status={profile.aboutMe}/>
                        </div>
                    </div>
                </>}
        </div>
    );
};