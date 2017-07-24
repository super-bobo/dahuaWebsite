import api from '../../fetch/api'

const state = {
    IPCSupportDetail: ''
}

const actions = {

    getIPCSupportDetail( { commit }, params) {
        api.IPCSupportDetail(params)
            .then(res => {
                state.IPCSupportDetail = res;
                console.log(res)
            })
    }
}

const getters = {
    IPCSupportDetail: state => state.IPCSupportDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}