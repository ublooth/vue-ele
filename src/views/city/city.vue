<template>
  <div class="city">
    <headTop>
      <h4 slot="city" class="city-name">{{ cityName }}</h4>
    </headTop>
  </div>
</template>

<script>
import headTop from "@/components/head/head";
import {currentcity, searchplace} from '@/service/getData';

export default {
  data() {
    return {
      cityid: '',
      cityName: '',
    }
  },
  components: {
    headTop,
  },
  methods: {
    inercase() {
      return this.num += 1
    }
  },
  mounted () {
    // 城市ID
    this.cityid = this.$route.params.cityid
    currentcity(this.cityid).then(res => {
      console.log("res", res);
      this.cityName = res.name;
    })
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
}
  
</style>