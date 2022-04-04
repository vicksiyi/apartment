import axios from "../axios";

// 验证token是否失效
export const isauth = function (parms) {
    return axios.request({
        url: '/api/auth/isauth',
        method: "get",
        params: parms
    })
}

// 登录
export const login = function (parms) {
    return axios.request({
        url: '/api/auth/login',
        method: "post",
        data: parms.data
    })
}
// 发送验证码
export const sendcode = function (parms) {
    return axios.request({
        url: '/api/auth/sendcode',
        method: "post",
        data: parms.data
    })
}

// 注册
export const register = function (parms) {
    return axios.request({
        url: '/api/auth/register',
        method: "post",
        data: parms.data
    })
}