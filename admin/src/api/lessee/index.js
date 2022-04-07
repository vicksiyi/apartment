import axios from "../axios";

// 租户与公寓关联
export const addroomreluser = function (parms) {
    return axios.request({
        url: '/api/lessee/addroomreluser',
        method: "post",
        data: parms.data
    })
}

// 获取租户与公寓关联
export const getroomreluser = function (parms) {
    return axios.request({
        url: '/api/lessee/getroomreluser'
    })
}

// 续费
export const continueroomreluser = function (parms) {
    return axios.request({
        url: '/api/lessee/continueroomreluser',
        method: "post",
        data: parms.data
    })
}

// 续费情况
export const getcontinuedetail = function (parms) {
    return axios.request({
        url: `/api/lessee/getcontinuedetail/${parms.id}`,
    })
}

// 退租
export const endlessee = function (parms) {
    return axios.request({
        url: `/api/lessee/endlessee/${parms.id}`,
        method: "put"
    })
}

// 获取公寓详细信息
export const getroom = function (parms) {
    return axios.request({
        url: `/api/room/getroom/${parms.roomId}`,
    })
}

// 获取用户信息
export const getuserinfo = function (parms) {
    return axios.request({
        url: `/api/lessee/getuserinfo/${parms.user_uuid}`,
    })
}