import api from '../../fetch/api'

const state = {
    solution: ''
}

const actions = {

    getSolution() {
        api.solution()
            .then(res => {
                state.solution = res;
                console.log(res)
            })
    }
}

const getters = {
    solution: state => state.solution
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}