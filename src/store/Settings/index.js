import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  theme: localStorage.getItem("theme") || "light",
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
