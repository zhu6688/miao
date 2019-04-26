import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import axios from 'axios'
Vue.prototype.axios = axios;


Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
