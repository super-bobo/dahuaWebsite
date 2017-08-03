import api from '../../fetch/api'

const state = {
    noticeDetail: ''
}

const actions = {

    getNoticeDetail( { commit }, params) {
        api.noticeDetail(params)
            .then(res => {
                state.noticeDetail = res;
                console.log(res)
            })
    }
}

const getters = {
    noticeDetail: state => state.noticeDetail
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}