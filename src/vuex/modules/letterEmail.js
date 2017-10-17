import api from '../../fetch/api'

const state = {
    letterEmail: ''
}

const actions = {
}

const getters = {
    letterEmail: state => state.letterEmail
}

const mutations = {
   change(state, email){
   	state.letterEmail = email
   }
}

export default {
    state,
    actions,
    getters,
    mutations
}