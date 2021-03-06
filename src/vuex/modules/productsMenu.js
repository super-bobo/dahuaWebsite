import api from '../../fetch/api'

const state = {
    productMenu: ''
}

const actions = {

    /**/
    getProductMenu() {
        api.productMenu()
            .then(res => {
                state.productMenu = res;
                console.log(res)
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