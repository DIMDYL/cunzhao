<script setup>
// import { ref } from 'vue'
import indexNav from './indexNav.vue'
import indexFooter from './indexFooter.vue'
</script>
<template>
  <indexNav />
  <div class="tool"></div>
  <indexFooter />
</template>
<style lang="less" scoped>
.tool {
  width: 80%;
  height: 1000px;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
}
</style>
