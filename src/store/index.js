import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    //Modal status
    BgModal: false,
    background: "main-bg",
    SupportModalToggle: false,
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
    getSupportModalState(state) {
      console.log(
        "state.SupportModalToggle",
        state.SupportModalToggle
      );
      return state.SupportModalToggle;
    },
  },
});
