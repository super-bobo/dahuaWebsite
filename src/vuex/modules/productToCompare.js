import api from '../../fetch/api'

const state = {
    productToCompare: ''
}

const actions = {

    /**/
        
    getProductToCompare({ commit }, params) {
        api.productToCompare(params)
            .then(res => {
                state.productToCompare = res
                console.log(res)
            })
    }
}

const getters = {
    productToCompare: state => state.productToCompare
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}