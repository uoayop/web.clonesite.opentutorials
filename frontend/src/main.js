// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

const BASE_URL = process.env.VUE_APP_API_URL
export default BASE_URL

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
