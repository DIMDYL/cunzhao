<script setup>
import imgtool from '@/components/imgtool/index.vue'
</script>
<template>
  <imgtool>
    <template #link>
      <ul>
        <li>
          <RouterLink to="/changesize" :class="{ leftclick: $route.path === '/changesize' }"
            >一寸照片</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/twoinchessmall" :class="{ leftclick: $route.path === '/twoinchessmall' }"
            >二寸照片（小）</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/twoinchesinsize"
            :class="{ leftclick: $route.path === '/twoinchesinsize' }"
            >二寸照片（大）</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/size" :class="{ leftclick: $route.path === '/size' }"
            >自定义尺寸</RouterLink
          >
        </li>
      </ul>
    </template>
  </imgtool>
</template>
<style lang="less" scoped>
ul {
  width: 100%;
  // padding: 10px;
  box-sizing: border-box;
  li {
    list-style: none;
    a {
      display: block;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      padding: 12px 0;
      text-align: center;
      &:hover {
        font-weight: 888;
        background-color: rgba(0, 98, 255, 0.164);
        color: rgb(17, 108, 255) !important;
      }
    }
  }
}
</style>
