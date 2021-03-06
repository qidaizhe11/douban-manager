import Vue from 'vue'
import axios from 'axios'

import 'element-ui/lib/theme-default/index.css'

import moment from 'moment'

import App from './App'
import router from './router'
import store from './store'

moment.locale('zh-cn')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
