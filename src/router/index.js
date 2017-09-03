import Vue from 'vue'
import Router from 'vue-router'
import EventsFeed from '@/views/EventsFeed'
import Hello from '@/views/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventsFeed',
      component: EventsFeed
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
