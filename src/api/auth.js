import instance from "./"

export const authAPI = {
     me() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password) {
      return instance
          .post(`/auth/login`, { email: email, password: password})
    }
}