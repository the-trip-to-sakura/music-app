 <template>
  <div class="recommendedsonglist">
    <div class="header-list">
      <span class="left-hedaer">推荐歌单</span>
      <span class="right-header">歌单广场</span>
    </div>
    <div class="list">
      <div class="song-list" v-for="(list,index) in songlist" :key="index">
        <router-link class="list-id" :to="`recommendedsonglist/${list.id}`">
          <img :src="list.picUrl" alt="推荐列表海报" />
          <span class="playcount">{{Math.floor((list.playCount)/10000)}}万</span>
          <span class="expression">{{list.name}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'RecommendedSongList',
  data() {
    return {
      songlist: []
    }
  },
  mounted() {
    this.getRecommendedSongList()
  },
  methods: {
    getRecommendedSongList() {
      this.$http.get('/personalized')
        .then((data) => {
          this.songlist = data.result.slice(0, 6)
          console.log(this.songlist)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.recommendedsonglist {
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
      .playcount {
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
</style>
