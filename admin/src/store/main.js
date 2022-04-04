import Vue from 'vue';
import Vuex from 'vuex';
import tab from './admin/tab';
import header from './auth/header';
import device from './room/device';
import room from './room/room';
import createPersistedState from "vuex-persistedstate"

// 引入持久化
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        tab,
        header,
        device,
        room
    },
    // 持久化操作
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
})