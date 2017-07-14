import api from '../../fetch/api'

const state = {
    allProducts: ''
}

const actions = {

    /**/
    getAllProducts() {
        api.allProducts()
            .then(res => {
                state.allProducts = res;
            })
    }
}

const getters = {
    allProducts: state => state.allProducts
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}