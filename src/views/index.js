
export default [
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
  {
    path: '/Hello',
    name: 'Hello',
    label: 'Hello',
    component: () => import('@/views/Hello')
  },
  {
    path: '/Test',
    name: 'Test',
    label: 'Teste',
    component: () => import('@/views/Test')
  },
  {
    path: '*',
    redirect: '/events'
  }
]
