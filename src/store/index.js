import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import errorLog from './modules/errorLog'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user
  },
  getters
})

export default store