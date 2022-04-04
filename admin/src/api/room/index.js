import axios from "../axios";

// 验证token是否失效
export const adddevice = function (parms) {
    return axios.request({
        url: '/api/room/adddevice',
        method: "post",
        data: parms.data
    })
}

// 验证token是否失效
export const getdevice = function () {
    return axios.request({
        url: '/api/room/getdevice'
    })
}

// 添加公寓
export const addroom = function (parms) {
    return axios.request({
        url: '/api/room/addroom',
        method: "post",
        data: parms.data
    })
}

// 获取公寓
export const getrooms = function (parms) {
    return axios.request({
        url: '/api/room/getrooms'
    })
}