import api from '../../fetch/api'

const state = {
    aboutDhcc: ''
}

const actions = {

    getAboutDhcc() {
        api.aboutDhcc()
            .then(res => {
                state.aboutDhcc = res;
                console.log(res)
            })
    }
}

const getters = {
    aboutDhcc: state => state.aboutDhcc
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}