import instance from "./"

export const usersAPI = {
    getUsers (currentPage=1, pageSize=5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollowUser(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    }
}