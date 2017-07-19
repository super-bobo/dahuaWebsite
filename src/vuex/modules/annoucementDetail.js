import api from '../../fetch/api'

const state = {
    annoucementDetail: ''
}

const actions = {

    getAnnoucementDetail( { commit }, params) {
        api.annoucementDetail(params)
            .then(res => {
                state.annoucementDetail = res;
                console.log(res)
            })
    }
}

const getters = {
    annoucementDetail: state => state.annoucementDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}