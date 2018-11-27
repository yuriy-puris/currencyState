import './assets/css/index.scss'

import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import router from './router/router'
import store from './store/store'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  components: { App },
  template: '<App/>'
})
