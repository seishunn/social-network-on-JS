import axios from "axios";

const instance = axios.create({
    headers: {
        'API-KEY': '553d8f1d-bf7c-4895-a33e-915c206d7e8d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const profileAPI = {
    me () {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },
}
