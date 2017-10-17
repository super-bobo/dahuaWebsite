import api from '../../fetch/api'


const state = {
    sendEmail: '',
    successText: 'Subscription success',
    openAlert: false
}

const actions = {

    /**/
        
    getSendEmail({ commit }, params) {
        api.sendEmail(params)
            .then( res => {
                if(res.error == 1){
                    alert(res.message)
                }else{
                    commit('open')
                }
                console.log(res)
            }, res => {
                alert(res)
            })
    }
}

const getters = {
    openAlert: state => state.openAlert,
    successText: state => state.successText
}

const mutations = {
     open(state){
        state.openAlert = true
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}