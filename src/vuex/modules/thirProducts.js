import api from '../../fetch/api'

const state = {
    thirProducts: ''
}

const actions = {

    /**/
        
    getThirProducts({ commit }, id) {
        api.thirProducts(id)
            .then(res => {
                state.thirProducts = res
                console.log(res)
            })
    }
}

const getters = {
    thirProducts: state => state.thirProducts
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}