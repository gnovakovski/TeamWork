/** NPM PACKAGES **/
import Vue from 'vue'
import VueMaterial from 'vue-material'

/** STYLE SHEETS **/
import 'vue-material/dist/vue-material.css'

/** APP PACKAGES **/
import App from '@/App'
import router from '@/router'
import '@/api/firebase'

/** MATERIAL DESIGN **/
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
