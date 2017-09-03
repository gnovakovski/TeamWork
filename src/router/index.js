import Vue from 'vue'
import Router from 'vue-router'
import EventsFeed from '@/views/EventsFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventsFeed',
      component: EventsFeed
    }
  ]
})
