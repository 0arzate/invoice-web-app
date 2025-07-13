export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  },
  {
    path: '/invoice/:id/detail',
    name: 'invoice-detail',
    component: 'invoice-detail-page',
    action: async () => {
      await import('../pages/invoice-detail-page/invoice-detail-page.js')
    }
  }
]
