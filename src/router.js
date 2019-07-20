import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/find',
      component: () => import('./App.vue'),
      children: [
        {
          path: 'find',
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
      path: '/recommended_song_list/:id',
      component: () => import('./views/songListDetails.vue')
    }
  ]
})
