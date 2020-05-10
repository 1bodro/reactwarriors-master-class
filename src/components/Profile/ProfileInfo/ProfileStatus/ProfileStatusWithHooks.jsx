import React, {useState, useEffect} from "react";
import s from "./ProfileStatus.module.scss";



export const ProfileStatusWithHooks = props => {
    const {status,getUpdateUserStatus} = props;

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
        <div className={s.container}>
            {editMode
                ? <div className={s.change}>
                    <input onChange = {onStatusChange} onBlur={deactivateEditMode} value={editStatus} autoFocus={true}/>
                </div>
                : <div className={s.status}>
                    <span onDoubleClick={activateEditMode}>{status||'Write your status here'}</span>
                </div>
            }
        </div>
    );
}
