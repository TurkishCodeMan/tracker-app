import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import VueToasted from "vue-toasted"

Vue.use(VueToasted,{iconPack:"fontawesome"})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
