import React, {useState, useEffect} from "react";
import s from "./ProfileData.module.scss";



const Contact = ({name, value}) => {
    return <div><b>{name}:</b> {value}</div>
}

export const ProfileDataUser = ({profile}) => {
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

export const ProfileDataGuest = ({profile}) => {
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