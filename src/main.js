import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/reset.css'
import VueAreaLinkage from 'vue-area-linkage' // https://dwqs.github.io/vue-area-linkage/
Vue.use(ElementUI)
Vue.use(VueAreaLinkage)
Vue.config.productionTip = false

import Toasted from 'vue-toasted' // https://github.com/shakee93/vue-toasted
Vue.use(Toasted, {
  position: 'top-center',
  duration: 2000 // 持续出现3秒钟
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
})
