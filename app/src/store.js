import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    updateValue(state, payload) {
      state.value = payload;
    }
  },
  actions: {
    updateValue({ commit }, payload) {
      commit("updateValue", payload);
    }
  }
});
