export default {
    namespaced: true,
    state: {
        rooms: [],
        page: 1,
        room: {}
    },
    mutations: {
        updateRooms(state, val) {
            state.rooms = val;
        },
        updateRoom(state, val) {
            state.room = val;
        },
        updatePage(state, val) {
            state.page = val;
        }
    }
}