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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
};

export const setAuthUserData = data => ({type:SET_USER_DATA, data: data });

export default authReducer;