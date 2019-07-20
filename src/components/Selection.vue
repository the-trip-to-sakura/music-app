<template>
  <div class="selection">
    <div class="selection-icon">
      <div class="icon">
        <span class="iconfont icon-tuijian"></span>
        <span class="words">每日推荐</span>
      </div>
      <div class="icon">
        <span class="iconfont icon-paihangbang"></span>
        <span class="words">歌单</span>
      </div>
      <div class="icon">
        <span class="iconfont icon-icon-"></span>
        <span class="words">排行榜</span>
      </div>
      <div class="icon">
        <span class="iconfont icon-diantaizhibo"></span>
        <span class="words">电台</span>
      </div>
      <div class="icon">
        <span class="iconfont icon-zhibo"></span>
        <span class="words">直播</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selection'
}
</script>

<style lang="scss" scoped>
.selection {
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
</style>
