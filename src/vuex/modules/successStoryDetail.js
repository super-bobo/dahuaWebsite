import api from '../../fetch/api'

const state = {
    successStoryDetail: ''
}

const actions = {

    /**/
    getSuccessStoryDetail({ commit }, params) {
        api.successStoryDetail(params)
            .then(res => {
                state.successStoryDetail = res;
                console.log(res)
            })
    }
}

const getters = {
    successStoryDetail: state => state.successStoryDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}