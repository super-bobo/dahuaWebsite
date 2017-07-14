import api from '../../fetch/api'

const state = {
    newsletter: ''
}

const actions = {

    /**/
    getNewsletter() {
        api.newsletter()
            .then(res => {
                state.newsletter = res;
                console.log(res)
            })
    }
}

const getters = {
    newsletter: state => state.newsletter
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}