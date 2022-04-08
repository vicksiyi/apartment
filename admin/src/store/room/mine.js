export default {
    namespaced: true,
    state: {
        rooms: [],
        servicehistorys: []
    },
    mutations: {
        updateRooms(state, val) {
            state.rooms = val;
        },
        updateServiceHistorys(state, val) {
            state.servicehistorys = val;
        }
    }
}