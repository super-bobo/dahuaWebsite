import api from '../../fetch/api'

const state = {
    pressReleaseDetail: ''
}

const actions = {

    /**/
    getPressReleaseDetail({ commit }, params) {
        api.pressReleaseDetail(params)
            .then(res => {
                state.pressReleaseDetail = res;
                console.log(res)
            })
    }
}

const getters = {
    pressReleaseDetail: state => state.pressReleaseDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}