export default {
    namespaced: true,
    state: {
        relRooms: [],
        page: 1,
        continueId: -1,
        roomId: "",
        userId: ""
    },
    mutations: {
        updateRelRooms(state, val) {
            state.relRooms = val;
        },
        updatePage(state, val) {
            state.page = val;
        },
        updateContinueId(state, val) {
            state.continueId = val;
        },
        updateRoomId(state, val) {
            state.roomId = val;
        },
        updateUserId(state, val) {
            state.userId = val;
        },
    }
}