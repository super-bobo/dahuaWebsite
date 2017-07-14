import api from '../../fetch/api'

const state = {
    career: ''
}

const actions = {

    /**/
    getCareer({commit}, params) {
        api.career(params)
            .then(res => {
                state.career = res;
                console.log(res)
            })
    }
}

const getters = {
    career: state => state.career
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}