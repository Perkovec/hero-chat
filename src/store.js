/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const rootState = {
  count: 0,
};

const actions = {
  incrementIfOdd({ state }) {
    if ((state.count + 1) % 2 === 0) {
      state.count += 1;
    }
  },
};

export default new Vuex.Store({
  state: rootState,
  actions,
});
