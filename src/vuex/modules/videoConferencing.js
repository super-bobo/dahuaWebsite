import api from '../../fetch/api'

const state = {
    videoConferencing: ''
}

const actions = {

    /**/
        
    getVideoConferencing() {
        api.videoConferencing()
            .then(res => {
                state.videoConferencing = res;
                console.log(res)
            })
    }
}

const getters = {
    videoConferencing: state => state.videoConferencing
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}