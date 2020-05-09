import {authAPI} from "../../api/auth";
import {stopSubmit} from "redux-form";

const SET_USER_DATA="SET-USER-DATA";

let initialState = {
    usersId: null,
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

export const getAuthUserData = () => dispatch => {
    authAPI.me()
        .then(response => {
            console.log(response);
            console.log(response.data);
            console.log('response.resultCode === 0', response.resultCode === 0);
            console.log('{...response.data, isAuth: true}', {...response.data, isAuth: true});
            (response.resultCode === 0) && dispatch(setAuthUserData({...response.data, isAuth: true}));
        })
        .catch(error => console.log(error));
}

export const setLoginUser = data => dispatch => {
    authAPI.login(data)
        .then(response => {
            // console.log(response);
            // console.log(response.data.userId);
            // console.log('response.resultCode === 0', response.resultCode === 0);
            (response.resultCode === 0)
            ? dispatch(getAuthUserData())
            : dispatch(stopSubmit('loginUser', {_error: `${response.messages|| "email or password is wrong"}`}));
        })
        .catch(error => console.log(error));
}

export const setLogoutUser = data => dispatch => {
    authAPI.logout(data)
        .then(response => {
            let logoutState = {
                usersId: null,
                email: null,
                login: null,
                isAuth: false
            };

            (response.resultCode === 0) && dispatch(setAuthUserData(logoutState));
        })
        .catch(error => console.log(error));
}

export default authReducer;