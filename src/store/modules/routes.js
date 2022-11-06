const state = {
    routes: []
}

const mutations = {
    // SET_ROUTES
    SET_ROUTES(state, routes) {
        state.routes = JSON.parse(JSON.stringify(routes));
    }
}

const actions = {
    addRoutes({ commit }, routes) {
        commit('SET_ROUTES', routes);
    }
}

export default {
    namespaced: true,
    actions,
    state,
    mutations
}