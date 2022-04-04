import axios from "../axios";

export const isauth = function (parms) {
    return axios.request({
        url: '/api/auth/isauth',
        method: "get",
        params: parms
    })
}
