import React from "react";
import { ProfileInfo } from "./ProfileInfo";
import StoreContext from "../../../StoreContext";

export const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => <ProfileInfo user={store.getState().user} />}
    </StoreContext.Consumer>
  );
};
