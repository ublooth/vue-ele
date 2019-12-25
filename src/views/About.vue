<template>
  <div class="about">
    <headTop>
      <h3 slot="about">这里是about标题</h3>
    </headTop>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import headTop from '@/components/head/head'

export default {
  components: {
    headTop
  }
}
</script>

<style lang="scss" scoped>

</style>