import api from '../../fetch/api'

const state = {
    introductionList: ''
}

const actions = {

    /**/
    getIntroductionList({commit}, params) {
        api.introductionList(params)
            .then(res => {
                state.introductionList = res;
                console.log(res)
            })
    }
}

const getters = {
    introductionList: state => state.introductionList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}