import api from '../../fetch/api'

const state = {
    productMenu: ''
}

const actions = {

    /**/
    getProductMenu({ commit }, palyload) {
        api.productMenu()
            .then(res => {
                state.productMenu = res;
                console.log(state.productMenu)
            }) 
    }
}

const getters = {
    productMenu: state => state.productMenu
}

const mutations = {
}

export default {
    state,
    actions,
    getters,
    mutations
}