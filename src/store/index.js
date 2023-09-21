import { createStore } from "vuex";

export default createStore({
  state: {
    lang: `GE`,
  },
  getters: {
    getLang: (state) => {
      return state.lang;
    },
  },
  mutations: {},
  actions: {
    setLang({ state }, language) {
      state.lang = language;
    },
  },
  modules: {},
});
