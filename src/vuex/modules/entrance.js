import api from '../../fetch/api'

const state = {
    entrance: ''
}

const actions = {

    getEntrance( { commit }, params) {
        api.entrance(params)
            .then(res => {
                state.entrance = res;
                console.log(res)
            })
    }
}

const getters = {
    entrance: state => state.entrance
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}