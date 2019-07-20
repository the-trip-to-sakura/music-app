import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/find',
      component: () => import('./views/BotNav.vue'),
      children: [
        {
          path: '/find',
          component: () => import('./views/find.vue')
        },
        {
          path: 'movie',
          component: () => import('./views/movie.vue')
        },
        {
          path: 'mine',
          component: () => import('./views/mine.vue')
        },
        {
          path: 'friend',
          component: () => import('./views/friend.vue')
        }
      ]
    },
    {
      path: '/recommendedsonglist/:id',
      component: () => import('./views/songListDetails.vue')
    }
  ]
})
