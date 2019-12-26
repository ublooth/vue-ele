<template>
  <div class="home">
    <headTop>
      <h3 slot="home">这里是首页标题</h3>
    </headTop>
    <div class="current">
      <div class="city-gps">
        <span>当前城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from '@/components/head/head'
import { groupcity, hotcity } from '@/service/getData'

export default {
  components: {
    headTop
  },
  data() {
    return {

    }
  },
  mounted() {
    // 获取首页热门城市
    hotcity().then(res => {
      console.log("res1", res)
    })
    //获取所有城市
    groupcity().then((res) => {
      // this.groupcity = res;
      console.log("res2", res)
    })
  }
}
</script>

<style lang="scss">
@import '@/style/mixin';
.home {
  .current {
    background: #fff;
    padding: 0 10px;
    border-bottom: 1px solid #e4e4e4;
    .city-gps {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        @include sc(0.55rem, #666)
      }
      span:nth-child(2) {
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f)
      }
    }
    
  }
}
</style>