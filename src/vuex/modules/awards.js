import api from '../../fetch/api'

const state = {
    awards: ''
}

const actions = {

    /**/
    getAwards() {
        api.awards()
            .then(res => {
                state.awards = res;
                console.log(res)
            })
    }
}

const getters = {
    awards: state => state.awards
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}