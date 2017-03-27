import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Apple from '../components/Apple'
// import Banana from '../components/Banana'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: r => require.ensure([], () => r(require('@/components/Hello')), 'group-foo')
    }, {
      path: '/apple',
      name: 'ApplePage',
      component: r => require.ensure([], () => r(require('@/components/Apple')), 'group-bar')
    }, {
      path: '/banana',
      name: 'BananaPage',
      component: r => require.ensure([], () => r(require('@/components/Banana')), 'group-bar')
    }
  ]
})
