import api from '../../fetch/api'

const state = {
    distributionPartner: ''
}

const actions = {

    getDistributionPartner( { commit }, params) {
        api.distributionPartner(params)
            .then(res => {
                state.distributionPartner = res;
                console.log(res)
            })
    }
}

const getters = {
    distributionPartner: state => state.distributionPartner
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}