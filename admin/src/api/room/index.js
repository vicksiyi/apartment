import axios from "../axios";

// 验证token是否失效
export const adddevice = function (parms) {
    return axios.request({
        url: '/api/room/adddevice',
        method: "post",
        data: parms.data
    })
}

// 获取配套设施
export const getdevice = function () {
    return axios.request({
        url: '/api/room/getdevice'
    })
}

// 获取配套设施
export const updatedevice = function (id) {
    return axios.request({
        url: `/api/room/updatedevice/${id}`,
        method: 'put'
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

// 添加公寓
export const editroom = function (parms) {
    return axios.request({
        url: '/api/room/editroom',
        method: "put",
        data: parms.data
    })
}

// 获取公寓
export const getrooms = function (parms) {
    return axios.request({
        url: '/api/room/getrooms'
    })
}

// 获取公寓照片
export const getimages = function (parms) {
    return axios.request({
        url: `/api/room/getimages/${parms.roomId}`
    })
}

// 删除公寓照片
export const delimage = function (parms) {
    return axios.request({
        url: `/api/room/delimage/${parms.id}`,
        method: "put"
    })
}

// 添加公寓设备
export const addroomdevice = function (parms) {
    return axios.request({
        url: `/api/room/addroomdevice`,
        method: "post",
        data: parms.data
    })
}

// 获取公寓设备
export const getroomdevice = function (parms) {
    return axios.request({
        url: `/api/room/getroomdevice/${parms.roomId}`
    })
}

export const delroomdevice = function (parms) {
    return axios.request({
        url: `/api/room/delroomdevice/${parms.id}`,
        method: "delete"
    })
}