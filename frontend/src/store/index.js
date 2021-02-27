import Vue from 'vue'
import Vuex from 'vuex'

import mypageStore from "./modules/mypageStore"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    
    },
    mutations: {

    },
    actions: {

    },    
    modules: {
        mypageStore : mypageStore,
    },

})