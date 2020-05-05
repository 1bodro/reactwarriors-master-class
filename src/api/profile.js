import instance from "./"

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance
            .get(`status/${userId}`)
    },
    updateStatus(userId,status) {
        return instance
            .put(`status`, {status: status})
    }
}