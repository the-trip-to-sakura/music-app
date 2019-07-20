<template>
  <div class="botNav">
    <router-view></router-view>
    <van-tabbar class="nav-bottom" v-model="active" active-color="red" route>
      <van-tabbar-item class="tabbar-item" to="/find" replace>
        <van-icon class="icon" name="music-o" />
        <span class="label">发现</span>
      </van-tabbar-item>
      <van-tabbar-item class="tabbar-item" to="/movie" replace>
        <van-icon class="icon" name="play-circle-o" />
        <span class="label">视频</span>
      </van-tabbar-item>
      <van-tabbar-item class="tabbar-item" to="/mine" replace>
        <van-icon class="icon" name="manager-o" />
        <span class="label">我的</span>
      </van-tabbar-item>
      <van-tabbar-item class="tabbar-item" to="/friend" replace>
        <van-icon class="icon" name="friends-o" />
        <span class="label">朋友</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
import { Tabbar, TabbarItem, Icon } from 'vant';


export default {
  name: 'botNav',
  components: {
    'van-tabbar-item': TabbarItem,
    'van-tabbar': Tabbar,
    'van-icon': Icon
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>


<style lang="scss" scoped>
.botNav {
  padding-bottom: 150px;
  .nav-bottom {
    height: 120px;
    background-color: #e4e4e4;
    .icon {
      display: block;
      font-size: 60px;
    }
    .label {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>
