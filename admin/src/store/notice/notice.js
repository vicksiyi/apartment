export default {
    namespaced: true,
    state: {
        notices: [],
        page: 1,
    },
    mutations: {
        updateNotices(state, val) {
            state.notices = val;
        },
        updatePage(state, val) {
            state.page = val;
        }
    }
}