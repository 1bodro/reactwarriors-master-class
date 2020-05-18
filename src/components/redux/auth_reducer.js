import {authAPI} from "../../api/auth";
import {stopSubmit} from "redux-form";
import {setUser} from "./profile_reducer";

const SET_USER_DATA="SET-USER-DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const setAuthUserData = payload => ({type:SET_USER_DATA, payload: payload });

// export const getAuthUserData = () => dispatch => {
//     return authAPI.me()
//         .then(response => {
//             (response.resultCode === 0) && dispatch(setAuthUserData({...response.data, isAuth: true}));
//         })
//         .catch(error => console.log(error));
// }

export const getAuthUserData = () => async dispatch => {
    const response = await authAPI.me();

    if (response.resultCode === 0)  {
        dispatch(setAuthUserData({...response.data, isAuth: true}));
    };

}

export const setLoginUser = data => async dispatch => {
    const response = await authAPI.login(data);

    (response.resultCode === 0)
        ? dispatch(getAuthUserData())
        : dispatch(stopSubmit('loginUser', {_error: `${response.messages || "email or password is wrong"}`}));
}

export const setLogoutUser = data => async dispatch => {
    const response = await authAPI.logout(data);

    let logoutState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    };

    if (response.resultCode === 0)  {
        dispatch(setAuthUserData(logoutState));
        dispatch(setUser(null));
    }
}

export default authReducer;