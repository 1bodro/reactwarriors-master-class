import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);
