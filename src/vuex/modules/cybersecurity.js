import api from '../../fetch/api'

const state = {
    cybersecurity: ''
}

const actions = {

    getCybersecurity() {
        api.cybersecurity()
            .then(res => {
                state.cybersecurity = res;
                console.log(res)
            })
    }
}

const getters = {
    cybersecurity: state => state.cybersecurity
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}