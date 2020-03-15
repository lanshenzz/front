import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isEngOrCh: false,
  },
  mutations:{
    changeIsEngOrCh(state){
      state.isEngOrCh=!state.isEngOrCh;
    }
  }
});

export default store;

