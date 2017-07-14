import api from '../../fetch/api'

const state = {
    productSelectFilter: ''
}

const actions = {

    /**/
        
    getProductSelectFilter() {
        api.productSelectFilter()
            .then(res => {
                state.productSelectFilter = res
                console.log(res)
            })
    }
}

const getters = {
    productSelectFilter: state => state.productSelectFilter
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}