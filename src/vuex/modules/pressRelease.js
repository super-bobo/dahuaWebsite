import api from '../../fetch/api'

const state = {
    pressRelease: ''
}

const actions = {

    /**/
    getPressRelease({ commit }, params) {
        api.pressRelease(params)
            .then(res => {
                state.pressRelease = res;
                console.log(res)
            })
    }
}

const getters = {
    pressRelease: state => state.pressRelease
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}