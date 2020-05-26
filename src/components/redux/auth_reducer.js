import {authAPI} from "../../api/auth";
import {stopSubmit} from "redux-form";
import {setUser} from "./profile_reducer";
import {securityAPI} from "../../api/security";

const SET_USER_DATA="SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS= "GET-CAPTCHA-URL-SUCCESS"

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
    captchaUrl: null //if null captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export const setAuthUserData = payload => ({type: SET_USER_DATA, payload: payload});

export const getCaptchaUrlSuccess = captchaUrl => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

// export const getAuthUserData = () => dispatch => {
//     return authAPI.me()
//         .then(response => {
//             (response.resultCode === 0) && dispatch(setAuthUserData({...response.data, isAuth: true}));
//         })
//         .catch(error => console.log(error));
// }

export const getAuthUserData = () => async dispatch => {
    const response = await authAPI.me();

    (response.resultCode === 0) && dispatch(setAuthUserData({...response.data, isAuth: true}));
}

export const setLoginUser = data => async dispatch => {
    const response = await authAPI.login(data);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
    } else {
        dispatch(stopSubmit('loginUser', {_error: `${response.messages || "email or password is wrong"}`}));
    }
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

export const getCaptchaUrl = data => async dispatch => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.url));
}

export default authReducer;