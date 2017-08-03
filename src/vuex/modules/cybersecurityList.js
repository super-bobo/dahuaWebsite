import api from '../../fetch/api'

const state = {
    cybersecurityList: ''
}

const actions = {

    getCybersecurityList( { commit }, params) {
        api.cybersecurityList(params)
            .then(res => {
                state.cybersecurityList = res;
                console.log(res)
            })
    }
}

const getters = {
    cybersecurityList: state => state.cybersecurityList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}