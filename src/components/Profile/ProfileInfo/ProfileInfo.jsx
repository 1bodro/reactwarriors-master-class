import React, {useState} from "react";
import {Avatar, UserAvatar} from "../../common/Avatar/Avatar";
import s from "./ProfileInfo.module.scss";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileData, ProfileDataFormRedux} from "./ProfileData/ProfileData";
import defaultSrcBanner from "../../../assets/img/beach.jpg";
import {Contacts} from "./Contacts/Contacts";

export const ProfileInfo = props => {
    const {profile, status, isLoading, getUpdateUserStatus, isOwner, savePhoto, saveProfile} = props;
    const [editMode, setEditMode] = useState(false);
    const onSubmit = formData => {
        saveProfile(formData)
    }

    return (
        <>
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
                        <div className={s.info__account}>
                            {isOwner
                            ? <UserAvatar size="lg" src={profile.photos? profile.photos.large : null} id={profile.userId} savePhoto={savePhoto} />
                            : <Avatar size="lg" src={profile.photos? profile.photos.large : null} id={profile.userId}/>}
                                <div className={s.info__account__details}>
                                    <span className={s.info__account__name}>{profile.fullName}</span>
                                    <ProfileStatusWithHooks getUpdateUserStatus={getUpdateUserStatus} status={status} />
                                </div>
                        </div>
                        <div className={s.info__description}>
                            <ProfileData profile={profile} />
                        </div>
                        <div className={s.info__footer}>
                            {isOwner && <button className={s.info__editButton} onClick={() => setEditMode(true)}>edit</button>}
                            <div className={s.info__contacts}>
                                <span>Contacts:</span> <Contacts contacts={profile.contacts}/>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.editProfilPopup} ${editMode? s.open : ''}` }>
                        {editMode && <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} onClosePopup={() => setEditMode(false)} /> }
                    </div>
                </>}
        </>
    );
};