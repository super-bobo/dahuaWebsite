import api from '../../fetch/api'

const state = {
    productList: ''
}

const actions = {

    /**/
        
    getProductList({ commit }, id) {
        api.productList(id)
            .then(res => {
                state.productList = res;
                console.log(res)
            })
    }
}

const getters = {
    productList: state => state.productList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}