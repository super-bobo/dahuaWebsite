import api from '../../fetch/api'

const state = {
    solutionBank: ''
}

const actions = {

    getSolutionBank( { commit }, params) {
        api.solutionBank(params)
            .then(res => {
                state.solutionBank = res;
                console.log(res)
            })
    }
}

const getters = {
    solutionBank: state => state.solutionBank
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}