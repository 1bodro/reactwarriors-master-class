import instance from "./"

const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export default profileAPI;