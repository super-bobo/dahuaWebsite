import api from '../../fetch/api'

const state = {
    region: ''
}

const actions = {

    getRegion() {
        api.region()
            .then(res => {
                state.region = res;
                console.log(res)
            })
    }
}

const getters = {
    region: state => state.region
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}