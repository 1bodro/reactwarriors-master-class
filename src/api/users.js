import instance from "./"

export const usersAPI = {
    getUsers (currentPage=1, pageSize=5) {
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    },
    unFollowUser(id) {
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    }
}
