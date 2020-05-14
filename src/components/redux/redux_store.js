import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import userReducer from "./user_reducer";
import findUsersReducer from "./find_users_reducer";
import authReducer from "./auth_reducer";
import appReducer from "./app_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.store = store;

export default store;
