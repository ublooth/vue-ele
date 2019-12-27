<template>
  <div class="home">
    <headTop>
      <h3 slot="home">这里是首页标题</h3>
    </headTop>
    <div class="current">
      <div class="city-gps">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link to class="choice">
        <span></span>
        <i class="el-icon-arrow-right" style="font-size: 18px;"></i>
      </router-link>
    </div>
    <div class="city-list">
      <div class="popular">
        <div class="city-head">热门城市</div>
        <ul class="cityList">
          <router-link :to="'/city/' + item.id" tag="li" v-for="item in popularCity" :key="item.id">{{ item.name }}</router-link>
          <div style="clear: both"></div>
        </ul>
      </div>
      <!-- 遍历对象的键值对与索引 -->
      <!-- 值value，键key，索引i -->
      <div class="all" v-for="(value, key, i) in allCity" :key="i">
        <div class="city-head">
          {{ key }}
          <span v-if="i === 0">（按字母排序）</span>
        </div>
        <ul class="cityList">
          <router-link :to="'/city/' + item.id" tag="li" v-for="(item, i) in value" :key="i" class="all-li">{{ item.name }}</router-link>
          <div style="clear: both"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from "@/components/head/head";
import { groupcity, hotcity } from "@/service/getData";

export default {
  components: {
    headTop
  },
  data() {
    return {
      popularCity: [],
      allCity: []
    };
  },
  mounted() {
    // 获取首页热门城市
    hotcity().then(res => {
      this.popularCity = res;
    });
    //获取所有城市
    groupcity().then(res => {
      this.allCity = res;
      let sortobj = {};
      //将获取的数据按照A-Z字母开头排序
      // String.fromCharCode() 接受一个指定的 Unicode 值，然后返回一个字符串
      // Unicode 值:A~Z ==> 65~90
      // console.log('this.allCity["A"]', this.allCity['A'])
      for (let i = 65; i <= 90; i++) {
        if (this.allCity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.allCity[String.fromCharCode(i)];
        }
      }
      this.allCity = sortobj;
    });
    console.log("//", this.$route.path)
  },
};
</script>

<style lang="scss">
@import "@/style/mixin";
.home {
  .current {
    background: #fff;
    .city-gps {
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        @include sc(0.55rem, #666);
      }
      span:nth-child(2) {
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
      }
    }
    .choice {
      display: block;
      @include wh(100%, 40px);
      border-top: 1px solid #e4e4e4;
      border-bottom: 2px solid #e4e4e4;
      padding: 0 10px;
      @include fj;
      align-items: center;
    }
  }
  .city-list {
    .popular,
    .all {
      background: #fff;
      margin-top: 10px;
      .city-head {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        @include sc(0.55rem, #666);
        border-bottom: 1px solid #e4e4e4;
        border-top: 2px solid #e4e4e4;
      }
      .cityList {
        height: auto;
        li {
          float: left;
          text-align: center;
          color: $blue;
          border-bottom: 1px solid $bc;
          border-right: 1px solid $bc;
          @include wh(25%, 35px);
          @include font(14px, 35px);
          overflow: hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
        }
        li:nth-of-type(4n) {
          border-right: none;
        }
        .all-li {
          color: #666;
        }
      }
    }
    .all {
      .letter {
        @include sc(12px, #666);
      }
    }
  }
}
</style>