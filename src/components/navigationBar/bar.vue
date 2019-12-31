<template>
  <div class="bottom">
    <ul>
      <li>
        <i class="el-icon-eleme"></i>
        <div>外卖</div>
      </li>
      <li>
        <i class="el-icon-search"></i>
        <div>搜索</div>
      </li>
      <li>
        <i class="el-icon-document"></i>
        <div>订单</div>
      </li>
      <li>
        <i class="el-icon-user-solid"></i>
        <div>我的</div>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    name() {
      
    }
  },
  mounted () {
    
  },
  created () {
    
  },
}
</script>

<style lang="scss">
@import "@/style/mixin";
.bottom {
  @include wh(100%, 45px);
  position: fixed;
  bottom: 0;
  border-top: 1px solid #e4e4e4;
  ul {
    li {
      background-color: #fff;
      // line-height: 45px;
      display: inline-block;
      text-align: center;
      @include wh(25%, 45px);
      i {
        @include sc(22px, #666)
      }
      div {
        @include sc(12px, #666);
        line-height: 14px;
        position: relative;
        bottom: 5px;
      }
    }
  }
}
</style>