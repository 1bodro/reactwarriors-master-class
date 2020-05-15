import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
    isLoading: false,
    initialized: false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const initializedSuccess = initialized => ({type: INITIALIZED_SUCCESS, initialized: initialized});

export const initializeApp = () => dispatch => {
    let promiseAuth = dispatch(getAuthUserData());

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(initializedSuccess());
        });
    // promiseAuth
    //     .then(() => {
    //     dispatch(initializedSuccess());
    // });
}

export default appReducer;