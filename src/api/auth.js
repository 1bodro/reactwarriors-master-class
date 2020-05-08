import instance from "./"

export const authAPI = {
     me() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login: function (data) {
        return instance
            .post(`/auth/login`, {rememberMe: false,...data })
            .then(response => response.data)
    }
}