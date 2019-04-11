/**
 * @desc 根状态管理集
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);

let state = {
    inited: false // 是否初始化过
};

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state,
    actions,
    mutations,
    getters
});
