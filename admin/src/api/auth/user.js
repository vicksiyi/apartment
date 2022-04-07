import axios from "../axios";

// 提交真实姓名
export const putname = function (parms) {
    return axios.request({
        url: '/api/user/putname',
        method: "put",
        data: parms.data
    })
}

// 提交身份证号
export const putidcard = function (parms) {
    return axios.request({
        url: '/api/user/putidcard',
        method: "put",
        data: parms.data
    })
}

export const getpersondetail = function (parms) {
    return axios.request({
        url: '/api/user/getpersondetail'
    })
}

export const updatepasswd = function (parms) {
    return axios.request({
        url: '/api/user/updatepasswd',
        method: "post",
        data: parms.data
    })
}
