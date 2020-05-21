import React from "react";
import s from "./ProfileData.module.scss";
import {CustomCheckBox, Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators/validators";

const maxLength300 = maxLengthCreator(300);


export const ProfileData = ({profile}) => {

    return (
        <>
            <div className={s.aboutMe}>
                <div>
                    <span className={s.profile__title}>About me:</span>
                    <p className={s.profile__desc}>
                        {profile.aboutMe ? profile.aboutMe : null}
                    </p>
                </div>
            </div>

            <div className={s.aboutMe}>
                <span className={s.profile__title}>
                    My profile skills:
                    <span className={`${s.profile__label} ${profile.lookingForAJob ? s.profile__label__green : s.profile__label__red}`}>
                        {!profile.lookingForAJob ? "no ": ""}looking for a job
                    </span>
                </span>
                <p className={s.profile__desc}>
                    {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : null}
                </p>
            </div>
        </>
    )
}

const ProfileDataForm = ({handleSubmit, onClosePopup}) => {
    return (
        <form className={s.profile__popup} onSubmit={handleSubmit}>
            <div className={s.profile__popup__field}>
                <b>full name:</b><Field type="text" placeholder="Full name" name="fullName" component={Input}/>
            </div>
            <div className={s.profile__popup__field}>
                <b>looking for a job:</b> <Field type="checkbox" component={CustomCheckBox} name="lookingForAJob"/>
            </div>
            <div className={s.profile__popup__field}>
                <b>My profile skills:</b><Field component={TextArea} name="lookingForAJobDescription" className="textarea" placeholder="My profile skills"/>
            </div>
            <div className={s.profile__popup__field}>
                <b>About me:</b> <Field component={TextArea} name="aboutMe" className="textarea" placeholder="About me"/>
            </div>
            {/*<div>*/}
            {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map((contact, i) => <Contact key={i} name={contact}*/}
            {/*                                                                                 value={profile.contacts[contact]}/>)}*/}
            {/*</div>*/}
            <button className={s.profile__popup__buttonSend} onClick={() => {}}>save</button>
            <span className={s.profile__popup__buttonClose} onClick={onClosePopup}>X</span>
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm({form: 'profileForm'})(ProfileDataForm);