
export default [
  // Events
  {
    path: '/events',
    name: 'EventsFeed',
    label: 'Eventos',
    component: require('@/views/EventsFeed')
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails')
  },

  // Scouting
  {
    path: '/scouting',
    name: 'ScoutingHome',
    label: 'Scouting',
    component: () => import('@/views/ScoutingHome')
  },
  {
    path: '*',
    redirect: '/events'
  }
]
