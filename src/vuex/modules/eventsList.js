import api from '../../fetch/api'

const state = {
    eventsList: ''
}

const actions = {

    /**/
    getEventsList() {
        api.eventsList()
            .then(res => {
                state.eventsList = res;
                console.log(res)
            })
    }
}

const getters = {
    eventsList: state => state.eventsList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}