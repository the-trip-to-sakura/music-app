<template>
  <div class="find">
    <home-header></home-header>
    <swipe></swipe>
    <selection></selection>
    <recommended-song-list></recommended-song-list>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import Swipe from '../FindSplits/swipe.vue'
import Selection from '../FindSplits/Selection.vue'
import RecommendedSongList from '../FindSplits/RecommendedSongList.vue'

export default {
  name: 'find',
  components: {
    HomeHeader,
    Swipe,
    Selection,
    RecommendedSongList
  }

}
</script>

<style lang="scss" scoped>
</style>
