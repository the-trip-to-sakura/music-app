import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'find',
      component: () => import('./views/find/find.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/movie/movie.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine/mine.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('./views/friend/friend.vue')
    },
    {
      path: '/recommended_song_list/:id',
      name: 'recommendedSongList',
      component: () => import('./views/songListDetails/songListDetails.vue')
    }
  ]
})
