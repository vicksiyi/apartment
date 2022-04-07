export default {
    namespaced: true,
    state: {
        relRooms: [],
        page: 1,
    },
    mutations: {
        updateRelRooms(state, val) {
            state.relRooms = val;
        },
        updatePage(state, val) {
            state.page = val;
        }
    }
}