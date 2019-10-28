const state = {
  current: []
}

const mutations = {
  push(state, ping) {
    state.current.push(ping);
  },
  remove(state, ping) {
    const current = state.current;
    const l = current.length;
    let i = 0;
    for(; i < l; i++) {
      if(current[i] === ping) {
        break;
      }
    }

    if(i < l) {
      current.splice(i, 1);
    }
  },
  updatePing(state, payload) {
    payload.ping.current = payload.current;
  }
}

const actions = {
  add({ commit }, ping) {
    commit('push', ping);
  },
  remove({ commit }, ping) {
    commit('remove', ping);
  },
  updatePing({ commit }, payload) {
    commit('updatePing', payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
