<template>
  <div id="app">
    <headTop></headTop>
    <router-view/>
    <navigationBar></navigationBar>
  </div>
</template>

<script>
import headTop from "@/components/head/head";
import navigationBar from "@/components/navigationBar/bar";

export default {
  data() {
    return {
      
    }
  },
  components: {
    headTop,
    navigationBar
  },
}
</script>

<style lang="scss">
 body {
   position: relative;
 }
</style>
