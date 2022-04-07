import axios from "../axios";

// 获取公寓【所有】
export const usergetrooms = function (parms) {
    return axios.request({
        url: '/api/room/usergetrooms',
    })
}

// 获取具体信息
export const usergetroom = function (parms) {
    return axios.request({
        url: `/api/room/usergetroom/${parms.roomId}`,
    })
}

// 获取具体信息[基础设备]
export const usergetroomtype = function (parms) {
    return axios.request({
        url: `/api/room/usergetroomtype/${parms.roomId}`,
    })
}

// 获取个人房屋信息
export const getuserrooms = function (parms) {
    return axios.request({
        url: `/api/user/getuserrooms`,
    })
}