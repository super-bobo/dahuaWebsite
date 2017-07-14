import api from '../../fetch/api'

const state = {
    subProducts: ''
}

const actions = {

    /**/
        
    getSubProducts({ commit }, id) {
        api.subProducts(id)
            .then(res => {
                state.subProducts = res;
            })
    }
}

const getters = {
    subProducts: state => state.subProducts
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}