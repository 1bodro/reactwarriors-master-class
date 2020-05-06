import { connect } from "react-redux";
import React from "react";
import {getUpdateUserStatus} from "../../../redux/profile_reducer";
import {ProfileStatus} from "./ProfileStatus";



class ProfileStatusContainerAPI extends React.Component {

  constructor(props) {
    super(props);
    this.activateEditMode = this.activateEditMode.bind(this);
    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  // statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  deactivateEditMode() {
    const {getUpdateUserStatus} = this.props;
    this.setState({
      editMode: !this.state.editMode
    });
    getUpdateUserStatus(this.state.status);
  }

  onStatusChange(e) {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
        <ProfileStatus
            status={this.state.status}
            editMode={this.state.editMode}
            activateEditMode={this.activateEditMode}
            deactivateEditMode={this.deactivateEditMode}
            onStatusChange={this.onStatusChange}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.profilePage.status
  }
};


export const ProfileStatusContainer = connect(mapStateToProps ,{getUpdateUserStatus})(ProfileStatusContainerAPI);
