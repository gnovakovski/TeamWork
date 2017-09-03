/** NPM PACKAGES **/
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

/** APP PACKAGES **/
import App from '@/App'
import router from '@/router'

/** MATERIAL DESIGN **/
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
