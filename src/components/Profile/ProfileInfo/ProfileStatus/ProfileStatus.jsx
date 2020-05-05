import React from "react";
import s from "./ProfileStatus.module.scss";

export class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    state = {
        editMode: false
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        const {status} = this.props;
        return (
            <div className={s.container}>
                {this.state.editMode
                    ? <div className={s.change}>
                        <input onBlur ={this.toggleEditMode} value={status} autoFocus={true}/>
                    </div>
                    : <div className={s.status}>
                        <span onDoubleClick={this.toggleEditMode}>{status}</span>
                    </div>
                }
            </div>

        );
    }
};