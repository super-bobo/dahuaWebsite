import api from '../../fetch/api'

const state = {
    bestPractices: ''
}

const actions = {

    getBestPractices() {
        api.bestPractices()
            .then(res => {
                state.bestPractices = res;
                console.log(res)
            })
    }
}

const getters = {
    bestPractices: state => state.bestPractices
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}