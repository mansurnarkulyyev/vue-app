<template>
  <div class="content">
    <ProductHeader />
    <router-view></router-view>
  </div>

     <ProductFooter/>
</template>

<script>

import ProductFooter from './components/Footer.vue'
import ProductHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
   ProductFooter,
   ProductHeader,
  },
}
</script>

<style lang="scss" scoped>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
.content{
  flex-grow:1;
  padding-top: 120px;
}

</style>
