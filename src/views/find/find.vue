<template>
  <div class="find">
    <home-header></home-header>

    <!-- 首页轮播图 -->
    <div class="find-swipe">
      <van-swipe class="van-swipe" :autoplay="3000">
        <van-swipe-item v-for="image  in images" :key="image.id">
          <img :src="image.pic" alt="轮播图" />
          <span class="type-title">{{image.typeTitle}}</span>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 首页导航 -->
    <div class="find-selection">
      <div class="selection-icon">
        <div class="icon">
          <span class="iconfont icon-recommended"></span>
          <span class="words">每日推荐</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-songlist"></span>
          <span class="words">歌单</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-ranklist"></span>
          <span class="words">排行榜</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-livebroadcast"></span>
          <span class="words">电台</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-mv"></span>
          <span class="words">直播</span>
        </div>
      </div>
    </div>

    <!-- 首页推荐歌单 -->
    <div class="find-recommended-song-list">
      <div class="header-list">
        <span class="left-hedaer">推荐歌单</span>
        <span class="right-header">歌单广场</span>
      </div>
      <div class="list">
        <div class="song-list" v-for="list in songlist" :key="list.id">
          <router-link class="list-id" :to="`recommended_song_list/${list.id}`">
            <img :src="list.picUrl" alt="推荐列表海报" />
            <span class="play-count">{{Math.floor((list.playCount)/10000)}}万</span>
            <span class="expression">{{list.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import HomeHeader from '../../components/HomeHeader.vue'

export default {
  name: 'find',
  components: {
    HomeHeader,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  data() {
    return {
      images: [],
      songlist: []
    }
  },
  mounted() {
    this.getSwipeImg()
    this.getRecommendedSongList()
  },
  methods: {
    // 获取首页轮播图
    getSwipeImg() {
      this.$http.get('/banner?type=2')
        .then((data) => {
          this.images = data.banners
        })
    },
    // 获取推荐歌单
    getRecommendedSongList() {
      this.$http.get('/personalized')
        .then((data) => {
          this.songlist = data.result.slice(0, 6)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.find {
  .find-swipe {
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

  .find-selection {
    .selection-icon {
      display: flex;
      margin: 20px 0;
      .icon {
        margin: 20px auto;
        text-align: center;
        .iconfont {
          font-size: 80px;
          color: #fff;
          padding: 20px;
          background-color: #6060ff;
          border: 1px solid #fff;
          border-radius: 60px;
          display: flex;
        }
        .words {
          font-size: 25px;
          color: #515151;
        }
      }
    }
  }

  .find-recommended-song-list {
    margin-top: 30px;
    .header-list {
      display: flex;
      justify-content: space-between;
      .left-hedaer {
        font-size: 45px;
        font-weight: 900;
        margin-left: 15px;
      }
      .right-header {
        font-size: 20px;
        border: 1px solid #c0c0c0;
        line-height: 60px;
        border-radius: 35px;
        padding: 0 30px;
        margin-right: 15px;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      .song-list {
        max-width: 29%;
        margin: 8px auto;
        position: relative;
        .list-id {
          color: #2e2e2e;
        }
        img {
          max-width: 100%;
        }
        .expression {
          font-size: 25px;
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .play-count {
          font-size: 20px;
          position: absolute;
          right: 10px;
          top: 10px;
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
