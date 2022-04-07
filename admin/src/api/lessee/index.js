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