import api from '../../fetch/api'

const state = {
    successStoryList: ''
}

const actions = {

    /**/
    getSuccessStoryList({ commit }, params) {
        api.successStoryList(params)
            .then(res => {
                state.successStoryList = res;
                console.log(res)
            })
    }
}

const getters = {
    successStoryList: state => state.successStoryList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}