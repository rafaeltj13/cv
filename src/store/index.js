import Vuex from "vuex";
import Settings from './Settings'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Settings,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: debug,
})