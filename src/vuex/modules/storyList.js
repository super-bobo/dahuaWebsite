import api from '../../fetch/api'

const state = {
    storyList: ''
}

const actions = {

    /**/
    getStoryList() {
        api.storyList()
            .then(res => {
                state.storyList = res;
            })
    }
}

const getters = {
    storyList: state => state.storyList
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}