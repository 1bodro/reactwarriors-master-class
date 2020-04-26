import * as data from "./data";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import sidebarReduser from "./sidebar_reduser";
import findUsersReduser from "./find_users_reduser";
export const store = {
  _state: data,
  _callSubscrible() {},

  subscribe(observer) {
    this._callSubscrible = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    //action - object with type (examplpe, type:'ADD-POST')
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._state.findUsersPage = findUsersReduser(
      this._state.findUsersPage,
      action
    );
    this._callSubscrible(this._state);
  }
};
