<template>
  <div class="home-head">
    <span v-show="$route.path !== '/home'">
      <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
    </span>
    <span>
      <p>{{ headText }}</p>
    </span>
    <span>
      <router-link v-show="$route.params.cityid" to='/' class="tab">切换城市</router-link>
      <router-link to='' class="tab" v-show="$route.path === '/home'">
        <i class="el-icon-user" style="font-size: 22px;"></i>
      </router-link>
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'headText',
    ])
  },
  watch: {
    $route(to){
      let str = to.path.split('/')
      if(str[1] === 'home') {
        this.setHeadText('首页');
      }
    }
  },
  methods: {
    ...mapMutations([
      'setHeadText', //also supports payload `this.setHeadText(amount)` 
    ]),
  },
  mounted () {
  },
  created () {
    // this.url = this.$route.path;
  },
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
      color: #fff;
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
      .tab {
        @include sc(14px,#fff)
      }
    }
  }
</style>