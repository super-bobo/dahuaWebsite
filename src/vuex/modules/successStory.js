import api from '../../fetch/api'

const state = {
    successStory: ''
}

const actions = {

    /**/
    getSuccessStory() {
        api.successStory()
            .then(res => {
                state.successStory = res;
                console.log(res)
            })
    }
}

const getters = {
    successStory: state => state.successStory
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}