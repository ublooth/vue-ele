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
    position: relative;
    @include wh(100%, 1.95rem);
    background: $blue;
    padding: 0 5px;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    span:nth-child(1) {
      left: 5px;
      i {
        @include sc(22px,#fff)
      }
    }
    span:nth-child(2) {
      width: 65%;
      text-align: center;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    span:nth-child(3) {
      right: 10px;
      p {
        @include sc(14px,#fff)
      }
    }
  }
</style>