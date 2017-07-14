import api from '../../fetch/api'

const state = {
    productToFilterMenu: ''
}

const actions = {

    /**/
        
    getProductToFilterMenu({ commit }, params) {
        api.productToFilterMenu(params)
            .then(res => {
                state.productToFilterMenu = res
                console.log(res)
            })
    }
}

const getters = {
    productToFilterMenu: state => state.productToFilterMenu
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}