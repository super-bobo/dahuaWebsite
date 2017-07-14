import api from '../../fetch/api'

const state = {
    productSelect: ''
}

const actions = {

    /**/
        
    getProductSelect({ commit }, params) {
        api.productSelect(params)
            .then(res => {
                state.productSelect = res
                console.log(res) 
                console.log(res.data.length)
            })
    }
}

const getters = {
    productSelect: state => state.productSelect
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}