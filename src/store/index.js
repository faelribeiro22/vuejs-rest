import Vue from 'vue';
import Vuex from 'vuex';
import state '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

export default new Vuew.Store({
  state,
  mutations,
  actions,
})
