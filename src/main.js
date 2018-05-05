import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-ls'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Storage)

new Vue({
  render: h => h(App)
}).$mount('#app')
