<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getSongList } from './plugins/apis';

export default {
  name: 'app',
  data() {
    return {
      songListDetail: {},
    };
  },
  mounted() {
    this.songListDetail = getSongList();
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
