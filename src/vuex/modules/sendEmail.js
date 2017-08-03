import api from '../../fetch/api'

const state = {
    sendEmail: ''
}

const actions = {

    /**/
        
    getSendEmail({ commit }, params) {
        api.sendEmail(params)
    }
}

const getters = {
    sendEmail: state => state.sendEmail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}