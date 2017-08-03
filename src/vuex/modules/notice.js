import api from '../../fetch/api'

const state = {
    notice: ''
}

const actions = {

    getNotice() {
        api.notice()
            .then(res => {
                state.notice = res;
                console.log(res)
            })
    }
}

const getters = {
    notice: state => state.notice
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}