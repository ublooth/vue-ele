<template>
  <div class="home">
    <headTop>
      <h3 slot="home">这里是首页标题</h3>
    </headTop>
    <p>home页面</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from '@/components/head/head'

export default {
  components: {
    headTop
  }
}
</script>
