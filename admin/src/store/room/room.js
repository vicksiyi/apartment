export default {
    namespaced: true,
    state: {
        rooms: [],
        page: 1
    },
    mutations: {
        updateRooms(state, val) {
            state.rooms = val;
        },
        updatePage(state, val) {
            state.page = val;
        }
    }
}