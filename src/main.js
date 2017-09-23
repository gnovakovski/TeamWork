/** NPM PACKAGES **/
import Vue         from 'vue'
import VueRounter  from 'vue-router'
import VueFire     from 'vuefire'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

/* VUE USE */
Vue.use(VueRounter)
Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.material.registerTheme('default', themes.default)

/** APP PACKAGES **/
import App      from './App'
import routes   from './views'
import themes from './utils/literals/themes'
import './utils/api/firebase'
import './assets/css/styles.css'
import('./assets/css/fonts.css')

/** BOOT **/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRounter({ routes }),
  render: h => h(App)
})
