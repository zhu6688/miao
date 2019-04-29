import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import axios from 'axios'
Vue.prototype.axios = axios;


Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import Scroller from '@/components/scroller';
import Loading from '@/components/loading.vue';
Vue.component('Scroller',Scroller);
Vue.component('Loading',Loading);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
