<template>
  <div class="find">
    <HomeHeader></HomeHeader>
    <Swipe></Swipe>
    <Selection></Selection>
    <RecommendedSongList></RecommendedSongList>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import Swipe from '../components/swipe.vue'
import Selection from '../components/Selection.vue'
import RecommendedSongList from '../components/RecommendedSongList.vue'

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
