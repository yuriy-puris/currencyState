import Vue from 'vue'
import Vuex from 'vuex'

// modules
import nbu from './modules/nbu'
import interbank from './modules/interbank'
import news from './modules/news'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    nbu,
    interbank,
    news
  }
})

export default store;
