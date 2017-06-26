import Vue from 'vue'
import Vuex from 'vuex'

import productsMenu from './modules/productsMenu'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        productsMenu
    }
})