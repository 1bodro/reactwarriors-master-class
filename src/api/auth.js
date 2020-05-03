import instance from "./"

export const authAPI = {
     getAuth() {
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => response.data)
    }
}