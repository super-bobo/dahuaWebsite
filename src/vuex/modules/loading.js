const state = {
    isLoading: false
}

const actions = {
}

const getters = {
}

const mutations = {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }  
}

export default {
    state,
    actions,
    getters,
    mutations
}