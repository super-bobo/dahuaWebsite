import api from '../../fetch/api'

const state = {
    newProductList: ''
}

const actions = {

    /**/
        
    getNewProductList() {
        api.newProductList()
            .then(res => {
                state.newProductList = res;
            })
    }
}

const getters = {
    newProductList: state => state.newProductList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}