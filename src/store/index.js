import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    BgModal: false,
    background: "main-bg",
  },
  mutations,
  actions: {},
  modules: {},
  getters: {
    BgColor(state) {
      return state.BgModal;
    },
    getBackGround(state) {
      return state.background;
    },
  },
});
