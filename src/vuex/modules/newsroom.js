import api from '../../fetch/api'

const state = {
    newsroom: ''
}

const actions = {

    /**/
    getNewsroom() {
        api.newsroom()
            .then(res => {
                state.newsroom = res;
                console.log(res)
            })
    }
}

const getters = {
    newsroom: state => state.newsroom
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}