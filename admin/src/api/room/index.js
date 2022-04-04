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