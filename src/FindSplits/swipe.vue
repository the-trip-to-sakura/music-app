<template>
  <div class="swipe">
    <van-swipe class="van-swipe" :autoplay="3000">
      <van-swipe-item v-for="image  in images" :key="image.id">
        <img :src="image.pic" alt="轮播图" />
        <span class="type-title">{{image.typeTitle}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: 'swipe',
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.getswipeimg()
  },
  methods: {
    getswipeimg() {
      this.$http.get('/banner?type=2')
        .then((data) => {
          this.images = data.banners
          console.log(this.images)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe {
  .van-swipe {
    position: relative;
    margin: 15px;
    border: 1px solid #fff;
    border-radius: 30px;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 30px;
  }
  .type-title {
    position: absolute;
    right: 5px;
    bottom: 10px;
    background-color: red;
    font-size: 30px;
    padding: 0 20px;
    border-radius: 15px 0px;
    color: #fff;
  }
}
</style>
