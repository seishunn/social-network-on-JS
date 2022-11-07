import axios from "axios";

const instance = axios.create({
    headers: {
        'API-KEY': '553d8f1d-bf7c-4895-a33e-915c206d7e8d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const authAPI = {
    me () {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login (formData) {
        return instance
            .post(`auth/login`, {
                email: formData.login,
                password: formData.password,
                captcha: formData.captchaText || ""
            })
            .then(response => response.data)
    },
    logout () {
        return instance
            .delete(`auth/login`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {
                status: status
            })
            .then(response => response.data);
    },
    updateUserImage(image) {
        const formData = new FormData();
        formData.append('image', image);

        return instance
            .put('profile/photo', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
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

export const dialogsAPI = {
    sendMessageToUser(userId, message) {
        return instance
            .post(`dialogs/${userId}/messages`, {
                body: message
            })
            .then(response => response.data)
    },
    getUserDialogs() {
        return instance
            .get(`dialogs`)
            .then(response => response.data)
    },
    getMessagesWithFriend(userId) {
        return instance
            .get(`dialogs/${userId}/messages`)
            .then(response => {
                return response.data;
            })
    }
}

export const securityAPI = {
    getCaptcha () {
        return instance
            .get('security/get-captcha-url')
            .then(response => response.data)
    }
}