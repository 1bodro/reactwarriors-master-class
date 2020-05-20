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
    },
    savePhoto(photo) {
        const formData= new FormData();

        formData.append("img", photo);
      return instance
          .put(`profile/photo`, formData, {headers: { "Content-Type": "multipart/form-data"}})
          .then(response => response.data);
    },

    saveProfile(profile) {
        return instance
            .put(`profile`, profile);
    }
}


export default profileAPI;