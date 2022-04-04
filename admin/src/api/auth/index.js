import axios from "../axios";

export const isauth = function (parms) {
    return axios.request({
        url: '/api/auth/isauth',
        method: "get",
        params: parms
    })
}


export const login = function (parms) {
    return axios.request({
        url: '/api/auth/login',
        method: "post",
        data: parms.data
    })
}