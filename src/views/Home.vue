<template>
  <div class="home">
    <headTop>
      <h3 slot="home">这里是首页标题</h3>
    </headTop>
    <p>home页面</p>
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from '@/components/head/head'

export default {
  components: {
    headTop
  }
}
</script>
