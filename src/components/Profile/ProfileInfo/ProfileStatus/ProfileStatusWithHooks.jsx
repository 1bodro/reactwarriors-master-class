import React, {useState, useEffect} from "react";
import s from "./ProfileStatus.module.scss";



export const ProfileStatusWithHooks = props => {
    const {status,getUpdateUserStatus, isOwner} = props;

    let [editMode, setEditMode] = useState(false);
    let [editStatus, setStatus] = useState(status);

    useEffect(()=> {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        getUpdateUserStatus(editStatus);
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {editMode && isOwner
                ? <div className={s.changeStatus}>
                    <input onChange = {onStatusChange} onBlur={deactivateEditMode} value={editStatus} autoFocus={true}/>
                </div>
                : <span className={`${s.staticStatus}${isOwner? ` ${s.hoverEffect}` : ''}`} onClick={activateEditMode}>{status||'Have a nice day'}</span>
            }
        </>
    );
}
