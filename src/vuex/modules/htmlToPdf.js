import api from '../../fetch/api'

const state = {
    htmlToPdf: ''
}

const actions = {

    /**/
        
    getHtmlToPdf({ commit }, params) {
        api.htmlToPdf(params)
            .then(res => {
                state.htmlToPdf = res
                console.log(res)
            })
    }
}

const getters = {
    htmlToPdf: state => state.htmlToPdf
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}