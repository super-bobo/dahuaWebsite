import api from '../../fetch/api'

const state = {
    verificationCode: ''
}

const actions = {

    getVerificationCode() {
        api.verificationCode()
            .then(res => {
                state.verificationCode = res;
                console.log(res)
            })
    }
}

const getters = {
    verificationCode: state => state.verificationCode
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}