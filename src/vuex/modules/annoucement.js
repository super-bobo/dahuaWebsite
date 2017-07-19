import api from '../../fetch/api'

const state = {
    annoucement: ''
}

const actions = {

    getAnnoucement() {
        api.annoucement()
            .then(res => {
                state.annoucement = res;
                console.log(res)
            })
    }
}

const getters = {
    annoucement: state => state.annoucement
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}