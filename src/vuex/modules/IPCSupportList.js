import api from '../../fetch/api'

const state = {
    IPCSupportList: ''
}

const actions = {

    getIPCSupportList( { commit }, params) {
        api.IPCSupportList(params)
            .then(res => {
                state.IPCSupportList = res;
                console.log(res)
            })
    }
}

const getters = {
    IPCSupportList: state => state.IPCSupportList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}