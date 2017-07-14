import api from '../../fetch/api'

const state = {
    productDetail: ''
}

const actions = {

    /**/
        
    getProductDetail({ commit }, id) {
        api.productDetail(id)
            .then(res => {
                state.productDetail = res;
            })
    }
}

const getters = {
    productDetail: state => state.productDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}