import api from '../../fetch/api'

const state = {
    newProducts: ''
}

const actions = {

    /**/
    getNewProducts(count) {
        api.newProducts(count)
            .then(res => {
                state.newProducts = res;
            })
    }
}

const getters = {
    newProducts: state => state.newProducts
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}