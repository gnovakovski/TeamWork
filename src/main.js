/** NPM PACKAGES **/
import Vue         from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

/** APP PACKAGES **/
import App    from './App'
import router from './views'
import themes from './utils/literals/themes'
import './utils/api/firebase'
import './assets/css/styles.css'
import('./assets/css/fonts.css')

/** MATERIAL DESIGN **/
Vue.use(VueMaterial)
Vue.material.registerTheme('default', themes.default)

/** BOOT **/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
