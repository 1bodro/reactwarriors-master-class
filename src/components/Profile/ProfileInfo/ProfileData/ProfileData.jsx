import React from "react";
import s from "./ProfileData.module.scss";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";



const Contact = ({contactName, contactValue}) => {
    return <div><b>{contactName}:</b> {contactValue}</div>
}

export const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.desc}>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <div>
                <b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My profile skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe ? profile.aboutMe : null}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((contact, i) => <Contact key={i} contactName={contact}
                                                                                             contactValue={profile.contacts[contact]}/>)}
            </div>
        </div>
    )
}

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form className={s.desc} onSubmit={handleSubmit}>
            <button onClick={()=> {}}>save</button>
            <div>
                <b>full name:</b><Field type= "text" placeholder="Full name" name="fullName" component={"input"} validate={[]} />
            </div>
            <div>
                <b>looking for a job:</b> <Field type="checkbox" component={"input"} name="lookingForAJob" />
            </div>
            <div>
                <b>My profile skills:</b><Field component={TextArea} name="lookingForAJobDescription" className="textarea" placeholder="My profile skills" validate={[]}/>
            </div>
            <div>
                <b>About me:</b> <Field component={TextArea} name="aboutMe" className="textarea" placeholder="About me" validate={[]}/>
            </div>
            {/*<div>*/}
            {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map((contact, i) => <Contact key={i} name={contact}*/}
            {/*                                                                                 value={profile.contacts[contact]}/>)}*/}
            {/*</div>*/}
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm({form: 'profileForm'})(ProfileDataForm);