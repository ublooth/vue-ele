<template>
  <div id="list">
    <headTop>
      <h3 slot="list">这里是list标题</h3>
    </headTop>
    <p>我是list页面</p>
  </div>
</template>

<script>
import headTop from '@/components/head/head'

export default {
  components: {
    headTop
  },
  data () {
    return {
      value1: ''
    }
  },
}
</script>

<style lang="scss">
@import '@/style/mixin';
  #list {
    p {
      @include sc(16px, yellow)
    }
  }
  
</style>