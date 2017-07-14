import api from '../../fetch/api'

const state = {
    contactUs: ''
}

const actions = {

    /**/
    getContactUs() {
        api.contactUs()
            .then(res => {
                state.contactUs = res;
                console.log(res)
            })
    }
}

const getters = {
    contactUs: state => state.contactUs
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}