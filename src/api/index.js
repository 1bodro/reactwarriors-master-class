import * as axios from "axios";

const instance = axios.create({
    headers: {
        "API-KEY": '00d2fa15-e31d-4426-b266-27f25c4e7bcb'
    },
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export default instance;