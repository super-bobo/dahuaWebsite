import api from '../../fetch/api'

const state = {
    keyTechnology: ''
}

const actions = {

    getKeyTechnology( { commit }, params) {
        api.keyTechnology(params)
            .then(res => {
                state.keyTechnology = res;
                console.log(res)
            })
    }
}

const getters = {
    keyTechnology: state => state.keyTechnology
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}