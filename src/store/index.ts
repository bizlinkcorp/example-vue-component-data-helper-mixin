import Vue from 'vue';
import Vuex from 'vuex';
import { setStoreState } from 'vue-component-data-helper-mixin';
import { createVuexPersistedState } from 'vue-persistedstate';

Vue.use(Vuex);

export interface ParentViewState {
  disabled?: boolean;
}

export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
      key: 'vuex',
      storage: window.sessionStorage,
    }),
  ],
  state: () => ({
    data: {},
    viewState: {},
  }),
  getters: {},
  mutations: {
    setStoreState,
  },
  modules: {},
});
