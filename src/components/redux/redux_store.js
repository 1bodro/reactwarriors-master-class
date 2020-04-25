import { createStore, combineReducers } from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import sidebarReduser from "./sidebar_reduser";
import userReduser from "./user_reduser";
const redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  user: userReduser
});
const store = createStore(redusers);

export default store;
