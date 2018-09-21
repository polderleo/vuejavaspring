import Vue from 'vue'
import Router from 'vue-router'
import Halftime from './components/Halftime.vue'
import Scoreboard from './components/Scoreboard.vue'
import All from './views/All.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/halftime',
      name: 'halftime',
      component: Halftime
    },
    {
        path: '/scoreboard',
        name: 'scoreboard',
        component: Scoreboard
    },
    {
      path: '/all',
      name: 'all',
      component: All
  },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
