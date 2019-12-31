<template>
  <div class="city">
    <div v-show="isCity === true ? true : false">
      <div class="address">
        <div>
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="inputData">
          <i v-show="isClose" @click="deleteData" class="el-icon-close"></i>
        </div>
        <div>
          <button @click="submission">提交</button>
        </div>
      </div>
      <div class="history">
        <p class="record" v-show="isRecord">搜索历史</p>
        <ul>
          <li
            class="record-li"
            v-for="(item, i) in searchData"
            :key="i"
            @click="clickCity(item)"
          >
            <p>{{ item.name }}</p>
            <p>{{ item.address }}</p>
          </li>
          <li class="empty" v-show="isEmpty" @click="emptyData">清空所有</li>
          <li class="nothing" v-show="nothing">很抱歉！无搜索结果</li>
        </ul>
      </div>
    </div>
    
    <mt-spinner
      v-show="isCity === true ? false : true"
      class="mt"
      type="fading-circle"
      color="#26a2ff"
      >
    </mt-spinner>
  </div>
</template>

<script>
import {currentcity, searchplace} from '@/service/getData';
import { Toast, Spinner } from 'mint-ui';
import { setStore, getStore, removeStore } from '@/config/mUtils';
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      isEmpty: false,
      isClose: false,
      nothing: false,
      isCity: false,
      isRecord: true,
      cityid: '', // 城市ID
      cityName: '', // 城市名称
      inputData: '', // 搜索内容
      searchData: [], // 搜索返回数据/读取搜索记录
      storeData: [], // 搜索记录
    }
  },
  components: {
    
  },
  watch: {
    inputData(newValue) {
      if (newValue) {
        this.isClose = true;
      } else {
        this.isClose = false;
      }
    }
  },
  methods: {
    ...mapMutations([
      'setHeadText', //also supports payload `this.setHeadText(amount)` 
    ]),
    emptyData() { // 清空数据
      removeStore('searchHistory');
      this.searchData = [];
      this.isEmpty = false;
    },
    deleteData() {
      this.inputData = '';
    },
    clickCity(data) {
      let geohash = data.geohash;
      let bool = true;
      for (let i = 0;i < this.storeData.length;i++) {
        if(this.storeData[i].geohash === geohash) {
          bool = false;
          break;
        }
      }
      if(bool) { // 没有相同数据存储数据
        data = this.storeData.concat(data);
        setStore('searchHistory', data); // 存储localStorage数据
      }
    },
    submission() {
      if (this.inputData) {
        searchplace(this.cityid, this.inputData).then(res => {
          if(res.length) {
            this.isEmpty = false;
            this.isRecord = false;
            this.nothing = false;
            this.searchData = res;
          } else {
            this.nothing = true;
          }
        })
      } else {
        Toast('请输入搜索内容');
      }
    },
    getStoreData() { // 读取搜索记录
      if(getStore('searchHistory')) {
        this.searchData = this.searchData.concat(JSON.parse(getStore('searchHistory')));
        this.storeData = this.searchData;
        this.isEmpty = true; // 清除按钮
      }
    },
  },
  mounted () {
    // 城市ID
    this.cityid = this.$route.params.cityid
    currentcity(this.cityid).then(res => {
      this.cityName = res.name;
      this.isCity = true;
      this.setHeadText(res.name);
      this.getStoreData();
    });
  },
  created () {
    
  },
}
</script>

<style lang="scss">
@import "@/style/mixin";
.city {
  .address {
    margin-top: 10px;
    @include wh(100%, 100px);
    background: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    div {
      @include wh(89%, 32px);
      margin: 0 auto;
      margin-top: 10px;
      position: relative;
      input[type="text"],
      button {
        @include wh(100%, 100%);
        vertical-align: top;
        border-radius: 2px;
      }
      input[type="text"] {
        border: 1px solid #ccc;
        padding-left: 10px;
        font-size: 16px;
      }
      .el-icon-close {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
      }
      button {
        background: $blue;
        @include sc(16px, #fff)
      }
    }
  }
  .history {
    .record {
      @include sc(12px, #000);
      border-bottom: 2px solid #e4e4e4;
      padding-left: 10px;
    }
    ul {
      padding-bottom: 15px;
      li {
        background: #fff;
      }
      .record-li {
        padding: 12px 20px 10px 15px;
        border-bottom: 1px solid #e4e4e4;
        p:nth-child(1) {
          @include sc(16px, #333);
        }
        p:nth-child(2) {
          @include sc(12px, #999);
          overflow: hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
        }
      }
      .empty {
        @include sc(16px, #666);
        text-align: center;
        padding: 8px 0;
      }
      .nothing {
        @include sc(16px, #666);
        padding: 8px 8px;
      }
    }
  }
  .mt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    div:nth-child(1) {
      margin: 0 auto;
    }
  }
}
  
</style>