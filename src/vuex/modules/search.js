import api from '../../fetch/api'

const state = {
    search: ''
}

const actions = {

    getSearch({ commit }, params) {
        api.search(params)
            .then(res => {
                state.search = res;
                console.log(res)
            })
    }
}

const getters = {
    search: state => state.search
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}