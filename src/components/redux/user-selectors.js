import {createSelector} from "reselect";

const getUsersSelector = state => {
    return state.findUsersPage.users
}

// export const getUsersSimple = state => {
//     return getUsersSelector(state).filter( u => true);
// }

export const getUsers = createSelector(getUsersSelector, users => (users.filter( () => true)));

export const getPageSize = state => {
    return state.findUsersPage.pageSize
}
export const getCurrentPage = state => {
    return state.findUsersPage.currentPage
}
export const getTotalUsersCount = state => {
    return state.findUsersPage.totalUsersCount
}
export const getIsLoading = state => {
    return state.findUsersPage.isLoading
}
export const getFollowingInProgress = state => {
    return state.findUsersPage.followingInProgress
}