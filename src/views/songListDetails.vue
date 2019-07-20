<template>
  <div class="songlistdetail">
    <p>1111</p>
  </div>
</template>


<script>
export default {
  name: 'songlistdetail',
  data() {
    return {
      retsonglistdetail: []
    }
  },
  mounted() {
    console.log(11)
    this.getremmendedsonglistdetail()
  },
  methods: {
    getremmendedsonglistdetail() {
      const detail = this.$route.params.id
      this.$http.get(`/playlist/detail?id=${detail}`)
        .then((data) => {
          console.log(data)
        })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
