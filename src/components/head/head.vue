<template>
  <div class="home-head">
    <span v-show="$route.path !== '/home'">
      <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
    </span>
    <span>
      <slot name="home"></slot>
      <slot name="about"></slot>
      <slot name="list"></slot>
      <slot name="city"></slot>
    </span>
    <span v-show="$route.params.cityid">
      <p>切换城市</p>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/style/mixin';
  .home-head {
    @include wh(100%, 1.95rem);
    @include fj;
    align-items: center;
    background: $blue;
    padding: 0 5px;
    span:nth-child(1) {
      i {
        @include sc(22px,#fff)
      }
    }
    span:nth-child(3) {
      p {
        @include sc(14px,#fff)
      }
    }
  }
</style>