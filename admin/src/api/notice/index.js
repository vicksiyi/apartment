import axios from "../axios";

// 添加公告
export const addnotice = function (parms) {
    return axios.request({
        url: '/api/notice/addnotice',
        method: "post",
        data: parms.data
    })
}

// 获取公告
export const getnotices = function (parms) {
    return axios.request({
        url: '/api/notice/getnotices'
    })
}

// 撤回
export const clearnotice = function (parms) {
    return axios.request({
        url: `/api/notice/clearnotice/${parms.id}`,
        method: "put"
    })
}
