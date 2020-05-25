import React from "react";
import s from "./ProfileData.module.scss";
import {Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";


export const ProfileData = ({profile}) => {

    return (
        <>
            <div className={s.aboutMe}>
                <span className={s.profile__title}>About me:</span>
                <p className={s.profile__desc}>
                    {profile.aboutMe ? profile.aboutMe : null}
                </p>
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

const ProfileDataForm = ({initialValues, handleSubmit, onClosePopup, ...props}) => {
    return (
        <form className={s.profile__popup} onSubmit={handleSubmit}>
            <div className={s.profile__popup__part}>
                <div className={s.profile__popup__field}>
                    <span className={s.profile__popup__label}>full name:</span><Field type="text" placeholder="Full name" name="fullName" component={Input}/>
                </div>
                <div className={s.profile__popup__field}>
                    <span className={s.profile__popup__label}>About me:</span> <Field component={TextArea} name="aboutMe" className="textarea customScrollbar" placeholder="About me"/>
                </div>
                <div className={`${s.profile__popup__field} ${s.checkbox}`}>
                    <span className={s.profile__popup__label}>looking for a job:</span> <Field type="checkbox" component={'input'} name="lookingForAJob"/>
                </div>
                <div className={s.profile__popup__field}>
                    <span className={s.profile__popup__label}>My profile skills:</span><Field component={TextArea} name="lookingForAJobDescription" className="textarea customScrollbar" placeholder="My profile skills"/>
                </div>
            </div>
            <div className={`${s.profile__popup__part} ${s.contacts}`}>
                <span className={s.profile__popup__label}>Contacts:</span>
                {Object.keys(initialValues.contacts)
                    .map((contact, i) =>
                        (<div key={i} className={s.profile__popup__field}>
                                <Field
                                       type="text"
                                       placeholder={contact}
                                       component={Input}
                                       name={`contacts.${contact}`}
                                       value={initialValues.contacts[contact]}
                                />
                            </div>
                        ))}
            </div>

            <button className={s.profile__popup__buttonSend}>save</button>
            {props.error && <div className={s.summaryError}>{props.error}</div>}
            <span className={s.profile__popup__buttonClose} onClick={onClosePopup}></span>
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm({form: 'profileForm'})(ProfileDataForm);