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

// 添加维修类别
export const addmaintenancetype = function (parms) {
    return axios.request({
        url: '/api/maintenance/addmaintenancetype',
        method: "POST",
        data: parms.data
    })
}

// 获取类别
export const getmaintenancetypes = function (parms) {
    return axios.request({
        url: '/api/maintenance/getmaintenancetypes'
    })
}
// 删除类别
export const delmaintenancetype = function (parms) {
    return axios.request({
        url: `/api/maintenance/delmaintenancetype/${parms.id}`,
        method: "put"
    })
}


// 获取类别
export const getmaintenances = function () {
    return axios.request({
        url: `/api/maintenance/getmaintenances`,
    })
}

// 更新状态
export const actionmaintenances = function (parms) {
    return axios.request({
        url: `/api/maintenance/actionmaintenances`,
        method: "put",
        data: parms.data
    })
}