export const getUsers = state => {
    return state.findUsersPage.users
}
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