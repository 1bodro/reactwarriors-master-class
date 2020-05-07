import {authAPI} from "../../api/auth";

const SET_USER_DATA="SET-USER-DATA";
const SET_USER_ID="SET-USER-ID";

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
                ...action.data,
                isAuth: true
            }

        case SET_USER_ID: {
            return {
                ...state,
                userId: action.userId
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = data => ({type:SET_USER_DATA, data: data });
export const setUserId = userId => ({type:SET_USER_DATA, userId: userId });

export const getAuthUserData = () => dispatch => {
    authAPI.me()
        .then(response => {
            (response.resultCode === 0) && dispatch(setAuthUserData(response.data));
        })
        .catch(error => console.log(error));
}

export const setLoginUser = () => dispatch => {
    authAPI.login()
        .then(response => {
            (response.resultCode === 0) && dispatch(setUserId(response.data.userId));
        })
        .catch(error => console.log(error));
}

export default authReducer;