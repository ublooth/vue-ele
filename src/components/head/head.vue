<template>
  <div class="home-head">
    <slot name="home"></slot>
    <slot name="about"></slot>
    <slot name="list"></slot>
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
    background: $blue;
  }
</style>