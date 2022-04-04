export default {
    namespaced: true,
    state: {
        devices: [],
        page: 1
    },
    mutations: {
        updateDevices(state, val) {
            state.devices = val;
        },
        updatePage(state, val) {
            state.page = val;
        }
    }
}