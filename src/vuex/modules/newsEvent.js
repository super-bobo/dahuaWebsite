import api from '../../fetch/api'

const state = {
    newsEvent: ''
}

const actions = {

    /**/
    getNewsEvent(count) {
        api.newsEvent(count)
            .then(res => {
                state.newsEvent = res;
            })
    }
}

const getters = {
    newsEvent: state => state.newsEvent
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}