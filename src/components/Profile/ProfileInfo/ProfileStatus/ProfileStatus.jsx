import React from "react";
import s from "./ProfileStatus.module.scss";


export const ProfileStatus = props => {
    const {status, editMode, activateEditMode, deactivateEditMode, onStatusChange} = props;
        return (
            <div className={s.container}>
                {editMode
                    ? <div className={s.change}>
                        <input onChange = {onStatusChange} onBlur={deactivateEditMode} defaultValue={status}  autoFocus={true}/>
                    </div>
                    : <div className={s.status}>
                        <span onDoubleClick={activateEditMode}>{status||'Write your status here'}</span>
                    </div>
                }
            </div>
        );
    };