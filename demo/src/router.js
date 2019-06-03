import Vue from 'vue'
import Router from 'vue-router'
import text from './views/text.vue'
import home from './views/Home.vue'
import card from './views/card.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'text',
      component: text
    },
    {
      path:'/home',
      component:home
    },

    {
      path:'/card',
      component:card
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
