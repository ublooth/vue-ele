<template>
  <div class="city">
    <headTop>
      <h5 slot="city" class="city-name">{{ cityName }}</h5>
    </headTop>
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
      <p class="record" v-show="isRecord">历史记录</p>
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
        <li class="empty" v-show="isEmpty">清空所有</li>
        <li class="nothing" v-show="nothing">很抱歉！无搜索结果</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import headTop from "@/components/head/head";
import {currentcity, searchplace} from '@/service/getData';
import { Toast } from 'mint-ui';
import { setStore, getStore } from '@/config/mUtils';

export default {
  data() {
    return {
      isEmpty: false,
      isClose: false,
      nothing: false,
      isRecord: true,
      cityid: '', // 城市ID
      cityName: '', // 城市名称
      inputData: '', // 搜索内容
      searchData: [], // 搜索返回数据
      getStoreData: [], // 搜索历史记录
    }
  },
  components: {
    headTop,
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
    deleteData() {
      this.inputData = '';
    },
    clickCity(data) {
      setStore('searchHistory', data); // 存储localStorage数据
    },
    submission() {
      if (this.inputData) {
        searchplace(this.cityid, this.inputData).then(res => {
          this.isRecord = false;
          this.searchData = res;
          if (!this.searchData.length) {
            this.nothing = true;
          }
        })
      } else {
        Toast('请输入搜索内容');
      }
    },
  },
  mounted () {
    // 城市ID
    this.cityid = this.$route.params.cityid
    currentcity(this.cityid).then(res => {
      this.cityName = res.name;
    });
    this.getStoreData = JSON.parse(getStore('searchHistory'))
    console.log("getStoreData", this.getStoreData)
  },
  created () {
    
  },
}
</script>

<style lang="scss">
@import "@/style/mixin";
.city {
  .city-name{
    color: #fff;
    font-weight: bold;
  }
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
  
}
  
</style>