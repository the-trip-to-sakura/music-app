<template>
  <div class="header">
    <div class="leftheader">
      <van-icon class="icon" name="wap-home" />
    </div>
    <div class="inputheader">
      <input type="text" placeholder=" 输入您想要搜索的歌曲" />
    </div>
    <div class="rightheader">
      <van-icon class="icon" name="bar-chart-o" />
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
  name: 'HomeHeader',
  components: {
    'van-icon': Icon
  }

}
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .leftheader,
  .rightheader,
  .inputheader {
    padding: 20px;
    .icon {
      font-size: 60px;
    }
    input {
      height: 64px;
      border: 1px solid #808080;
      border-radius: 30px;
      width: 580px;
      background-color: #dfdfdf;
    }
  }
}
</style>
