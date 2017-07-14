import api from '../../fetch/api'

const state = {
    productToFilter: ''
}

const actions = {

    /**/
        
    getProductToFilter({ commit }, params) {
        api.productToFilter(params)
            .then(res => {
                state.productToFilter = res
                console.log(res)
            })
    }
}

const getters = {
    productToFilter: state => state.productToFilter
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}