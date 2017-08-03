import api from '../../fetch/api'

const state = {
    searchList: ''
}

const actions = {

    getSearchList({ commit }, params) {
        api.searchList(params)
            .then(res => {
                state.searchList = res;
                console.log(res)
            })
    }
}

const getters = {
    searchList: state => state.searchList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}