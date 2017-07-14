import api from '../../fetch/api'

const state = {
    technologyPartner: ''
}

const actions = {

    getTechnologyPartner( { commit }, params) {
        api.technologyPartner(params)
            .then(res => {
                state.technologyPartner = res;
                console.log(res)
            })
    }
}

const getters = {
    technologyPartner: state => state.technologyPartner
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}