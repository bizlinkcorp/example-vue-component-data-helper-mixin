import { setStoreState } from 'vue-component-data-helper-mixin';
import { createVuexPersistedState } from 'vue-persistedstate';
import { createStore } from 'vuex';

export interface ParentViewState {
  disabled?: boolean;
}

export default createStore({
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
