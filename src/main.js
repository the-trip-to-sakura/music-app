import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './plugins/axios'
import './assets/style/main.scss'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
