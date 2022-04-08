import axios from "../axios";

// 提交维修
export const addmaintenance = function (parms) {
    return axios.request({
        url: '/api/maintenance/addmaintenance',
        method: "POST",
        data: parms.data
    })
}

// 获取维修历史
export const getusermaintenance = function (parms) {
    return axios.request({
        url: '/api/maintenance/getusermaintenance'
    })
}